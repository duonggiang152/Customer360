import { UserModel } from "../model/userModel"

const createUser = async () => {
    if((await UserModel.getUser({name: process.argv[2]})).length === 0) {
    await UserModel.addUser({name: process.argv[2], password: process.argv[3]})
    console.log(`------- CREATE USER ${process.argv[2]} Sucessed  --------`)
    return 
    }
    console.log(`---------  CREATE USER ${process.argv[2]} failed ---------`)
}

createUser()
