import { Router } from "express";
import * as controller from "../controllers/index";
import path from "path"
export const index = Router();


index.use("/login", controller.loginRouter);
index.use("/profile-user", controller.customerProfileRouter)
index.get("/*", (req, res) => {
    try {
    
    const fileDirectory = path.resolve(process.cwd())+ "/public";
    console.log(fileDirectory)
    res.sendFile('loadingpage.html', {root: fileDirectory}, (err) => {
        res.end();
    
        if (err) throw(err);
      });
    } catch(err) {
        return res.status(500).send({message: "Server Error"})
    }
});

