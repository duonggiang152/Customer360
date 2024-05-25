import { Request, Response, Router } from "express";

export const customerProfileRouter = Router();

const mockData = [
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231231",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
]

customerProfileRouter.get("/search", async (req: Request, res: Response) => {
    try{
        console.log(req.query);
        
        return res.send(mockData);
    } catch(err) {
        return res.status(500).send({message: "Unknown err"})
    }
})



customerProfileRouter.get("/:id",async (req: Request, res: Response)  => {
    try{
      
    } catch(err) {
        return res.status(500).send({message: "Unknown err"})
    }
})

