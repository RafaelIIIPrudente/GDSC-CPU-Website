// import Users from "../models/userModel";
// import argon2 from "argon2";

// export const Login = async(req: Request, res: Response) => {
//     const user = await Users.findOne({
//         where: {
//           email: req.body.email
//         }
//       });
//       if(!Users) return res.status(404).json({msg: "User not found"});
//       const match = await argon2.verify(user.password, req.body.password);
//       if(!match) return res.status(400).jason({msg: "Wrong Password"});
//       req.session.userId = user.uuid;
//       const uuid = user.uuid;
//       const name = user.name;
//       const email = user.email;
//       const role = user.role;
//       res.status(200).json({uuid, name, email, role});
// }

// export const Me = async(req: Request, res: Response) => {
//     if(!req.session.userId) {
//         return res.status(401).json({msg: "Please login your account"});
//     }
//     const user = await Users.findOne({
//         attributes: ['uuid', 'name', 'email', 'role'],
//         where: {
//           uuid: req.session.userId
//         }
//       });
//       if(!Users) return res.status(404).json({msg: "User not found"});
//       res.status(200).json(user);
// }

// export const logOut = (req: Request, res: Response) => {
//     req.session.destroy((err) => {
//         if(err) return res.status(400).json({msg: "Can't Log Out"});
//         res.status(200).json({msg: "You have log out"});
//     });
// }