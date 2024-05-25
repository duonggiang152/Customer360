import { Request, Response } from "express";



export {loginRouter} from "./login";
export {customerProfileRouter} from "./userprofile"






/**
 * GET /
 * Home page.
 */
// export const index = async (req: Request, res: Response): Promise<void> => {
//     res.render("index", { title: "Express" });
// };