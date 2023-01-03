import Users from "../models/userModel";
import argon2  from "argon2";
import { Request, Response } from "express";

export const getUsers = async(req: Request, res: Response) => {
  try {
    const response = await Users.findAll({
      attributes:['id', 'name', 'email', 'role']
    });
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({msg: error.message});
  }
};

export const getUserById = async(req: Request, res: Response) => {
  try {
    const response = await Users.findOne({
      attributes:['id', 'name', 'email', 'role'],
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

export const updateUser = async (req: Request, res: Response) => {
  // const user = await Users.findOne({    
  //   where: {
  //     uuid: req.params.id
  //   }
  // });
  // if(!Users) return res.status(404).json({msg: "User not found"})
  // const {name, email, password, confPassword, role} = req.body;
  // var hashPassword: string; 
  // if(password === "" || password === null) {
  //   hashPassword = user.password
  // } else {
  //   hashPassword = await argon2.hash(password);
  // }
  // if(password !== confPassword) return res.status(400).json({msg: "Password does not match!"})
  // try {
  //   await Users.update({
  //     name:name,
  //     email: email,
  //     password: password,
  //     role: role
  //   },{
  //     where:{
  //       id: user.id
  //     }
  //   })
  //   res.status(200).json({msg: "User Updated"})
  // } catch (error: any) {
  //   res.status(400).json({msg: error.message});
  // }
};

export const deleteUser = async(req: Request, res: Response) => {
  // const user = await Users.findOne({
    
  //   where: {
  //     uuid: req.params.id
  //   }
  // });
  // if(!Users) return res.status(404).json({msg: "User not found"});
  // try {
  //   await Users.destroy({
  //     where:{
  //       id: user.id
  //     }
  //   })
  //   res.status(200).json({msg: "User Deleted"})
  // } catch (error: any) {
  //   res.status(400).json({msg: error.message});
  // }
};


