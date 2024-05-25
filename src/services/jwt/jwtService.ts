import Jwt  from "jsonwebtoken"

export class JWTService {
    static readonly privateKey = "Customer360-84"
    static sign( object:any ): string {
        return Jwt.sign({...object, exp: Math.floor(Date.now() / 1000) + (60 * 60)}, JWTService.privateKey)
    }
    static verify(token:string): boolean {
        try {
            Jwt.verify(token, JWTService.privateKey)
            return true;
        } catch(err) {
            return false
        }
    }
}

