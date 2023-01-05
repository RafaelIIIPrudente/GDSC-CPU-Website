import Users from "../models/userModel";
import argon2 from "argon2";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {

  try {
    var response = await Users.findAll({
      attributes: ['uuid', 'id', 'name', 'email', 'role']
    }) .catch((e) => {
      console.error(e.message); // "oh, no!"
    });
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {

  try {
    const response = await Users.findOne({
      attributes: ['uuid', 'id', 'name', 'email', 'role'],
      where: {
        uuid: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {

  const { name, email, password, confPassword, role } = req.body;

  if (password !== confPassword) return res.status(400).json({ msg: "Password does not match!" })

  const hashPassword: string = await argon2.hash(password);

  try {
    await Users.create({
      name: name,
      email: email,
      password: hashPassword,
      role: role
    }).catch((e) => {
      console.error(e.message);
    })
    res.status(201).json({ msg: "Succesfully Registered!" })
  } catch (err: any) {
    res.status(400).json({ msg: "Unsuccesful!" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  var user = await Users.findOne({
    where: {
      uuid: req.params.id
    }
  }).catch((e) => {
    console.error(e.message);
  }).then((user) => {
    return user?.get({
      plain: true
    })
  });

  if (!Users) return res.status(404).json({ msg: "User not found" })
  const { name, email, password, confPassword, role } = req.body;
  var hashPassword: string;
  if (password === "" || password === null) {
    hashPassword = user.password
  } else {
    hashPassword = await argon2.hash(password);
  }

  if (password !== confPassword) return res.status(400).json({ msg: "Password does not match!" })

  try {
    await Users.update({
      name: name,
      email: email,
      password: password,
      role: role
    }, {
      where: {
        id: user.id
      }
    })
    res.status(200).json({ msg: "User Updated" })
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};


export const deleteUser = async (req: Request, res: Response) => {
  const user = await Users.findOne({

    where: {
      uuid: req.params.id
    }
  }).catch((e) => {
    console.error(e.message); // "oh, no!"
  }).then((user) => {
    return user?.get({
      plain: true
    })
  });;

  if (!Users) return res.status(404).json({ msg: "User not found" });
  try {
    await Users.destroy({
      where: {
        id: user.id
      }
    })
    res.status(200).json({ msg: "Successfully Deleted a User" })
  } catch (error: any) {
    res.status(400).json({ msg: error.message });
  }
};


