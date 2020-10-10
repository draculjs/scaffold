import {ForbiddenError} from "apollo-server-errors";


export default {
    Query: {
        ping: (_) => {
            return Promise.resolve({status: true})
        },
        pingDelayed: () => {
            return new Promise(resolve => {
                setTimeout(()=>{
                    resolve({status: true})
                },400)
            })
        },
        errorDemo: (_) => {
            throw new ForbiddenError("Not authorized")
        }
    }
}