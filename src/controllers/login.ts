import { Request, Response, Router } from "express";
import { UserModel } from "../model/userModel";
import { JWTService } from "../services/jwt/jwtService";
export const loginRouter = Router();

loginRouter.post("",async (req: Request, res: Response)  => {
    try{
        if(!req.body.username) return res.status(400).send({message: "missing username"});
        if(!req.body.password) return res.status(400).send({message: "missing password"});
        const user = await UserModel.getUser({name: req.body.username});
        if(user.length === 0) return res.status(400).send({message: "user name or password not exist"})
        if(UserModel.verifyUser(req.body.password, user[0].hashedPassword)) {
            const jwt = JWTService.sign({name: user[0].name, role: user[0].role, accoundID: user[0].accountID})
            return res.status(200).send({"accessToken": jwt});
        }
        return res.status(400).send({message: "User name or password not exist"});
    } catch(err) {
        return res.status(500).send({message: "Unknown err"})
    }
})

