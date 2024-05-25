import { Request, Response, Router } from "express";
import { ProfileCustomer } from "../model/profileCustomer";

export const customerProfileRouter = Router();

const mockData = [
    {
        id: "1231232",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231233",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231234",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231235",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
    {
        id: "1231236",
        username: "Duong van giang",
        phonenumber: "092137128371928"
    },
]

const mockData2 = {
    id: "3213123",
    username: "Dương Văn Giang",
    phonenumber: "Phone number"

}

customerProfileRouter.get("/search", async (req: Request, res: Response) => {
    try{
        console.log(req.query)
        const value = req.query.value as string
        const matchCustomer = await ProfileCustomer.queryBriefUser({phonenumber: value, username: value})
        const data = []
        for(let i = 0; i < matchCustomer.length; i++) {
            data.push({
                id: matchCustomer[i].customerid,
                username: matchCustomer[i].username,
                phonenumber: matchCustomer[i].phonenumber
            })
        }
        return res.send(data);
    } catch(err) {
        return res.status(500).send({message: "Unknown err"})
    }
})



customerProfileRouter.get("/:id",async (req: Request, res: Response)  => {
    try{
      console.log(req.params);
      const id = req.params.id
      return res.status(200).send(await ProfileCustomer.getUser(id))
    } catch(err) {
        return res.status(500).send({message: "Unknown err"})
    }
})

