import { Request, Response, Router } from "express";
export const loginRouter = Router();

loginRouter.post("",async (req: Request, res: Response): Promise<void> => {
    console.log(req.body)
    return res.render("index", { title: "Express" });
})

