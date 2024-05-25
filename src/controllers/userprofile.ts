import { Request, Response, Router } from "express";

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
        
        return res.send(mockData);
    } catch(err) {
        return res.status(500).send({message: "Unknown err"})
    }
})



customerProfileRouter.get("/:id",async (req: Request, res: Response)  => {
    try{
      console.log(req.params);
      return res.status(200).send(mockData2)
    } catch(err) {
        return res.status(500).send({message: "Unknown err"})
    }
})

