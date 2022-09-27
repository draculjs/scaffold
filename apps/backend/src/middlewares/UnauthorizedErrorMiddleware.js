import DraculLogger from "@dracul/logger-backend";
const {DefaultLogger} = DraculLogger;

export const unauthorizedErrorMiddleware =  (err, req, res, next) => {
    if(err && err.name === 'UnauthorizedError'){
        DefaultLogger.warn(err.message)
    }
    next()
}

export default unauthorizedErrorMiddleware
