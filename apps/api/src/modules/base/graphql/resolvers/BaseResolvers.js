import {ForbiddenError} from "apollo-server-errors";


export default {
    Query: {
        ping: (_) => {
            return Promise.resolve({status: true})
        },
        pingDelayed: (parent, {}, {req}) => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve({status: true})
                }, 400)
            })
        },
        pingTimeout: (parent, {}, {req}) => {
            console.log("PingDelayed started req.connection.timeout:", req.connection.timeout)
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log("PingDelayed resolved")
                    resolve({status: true})
                }, 250000)
            })
        },
        errorDemo: (_) => {
            throw new ForbiddenError("Not authorized")
        }
    }
}
