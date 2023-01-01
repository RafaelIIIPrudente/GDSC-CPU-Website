import Users from "../models/userModel";
import argon2  from "argon2";
import { Request, Response } from "express";

export const getUsers = async(req: Request, res: Response) => {
  try {
    const response = await Users.findAll();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({msg: error.message});
  }
};

export const getUserById = async(req: Request, res: Response) => {
  try {
    const response = await Users.findOne({
      where: {
        uuid: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({msg: error.message});
  }
};

export const createUser = async(req: Request, res: Response) => {
  const {name, email, password, confPassword, role} = req.body;
  if(password !== confPassword) return res.status(400).json({msg: "Password does not match!"})
  const hashPassword = await argon2.hash(password);

  try {
    await Users.create({
      name:name,
      email: email,
      password: password,
      role: role
    })
    res.status(201).json({msg: "Succesfully Registered!"})
  } catch (error: any) {
    res.status(400).json({msg: error.message});
  }
};

export const updateUser = (req: Request, res: Response) => {
  
};

export const deleteUser = (req: Request, res: Response) => {
  
};

