//  import { NextFunction, Request, Response } from "express";
// import User from "../models/userModel";

// export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
//     if(!req.session.userId) {
//         return res.status(401).json({msg: "Please login your account"});
//     }
//     const user = await User.findOne({
//         where: {
//           uuid: req.session.userId
//         }
//       });
//       if(!user) return res.status(404).json({msg: "User not found"});
//       req.userId = user.id;
//       req.role = user.role;
//       next();
// }

// export const adminOnly = async (req: Request, res: Response, next: NextFunction) => {
//     const user = await User.findOne({
//         where: {
//           uuid: req.session.userId
//         }
//       });
//       if(!user) return res.status(404).json({msg: "User not found"});
//       if (user.role !== "admin") return res.status(403).json({msg: "Access denied"});
//       next();
// }