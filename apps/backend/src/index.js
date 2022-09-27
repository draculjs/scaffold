require('dotenv').config();
import {DefaultLogger} from "@dracul/logger-backend";
import expressApp from './express-app.js'
import apolloServer from './apollo-server.js'
import initService from "./init/init-service.js";
import defaultRoute from "./routes/DefaultRoute.js";
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js'
const mongoConnect = require('./mongo-db')







async function startServer(){
    try{
        DefaultLogger.info("Starting APP")

        //Connect to MongoDb
        await mongoConnect()

        //Link ApolloServer with ExpressApp
        await apolloServer.start()

        expressApp.use(graphqlUploadExpress())

        apolloServer.applyMiddleware({app: expressApp})

        //Default route to frontend web on monorepo strategy
        expressApp.use(defaultRoute)

        await initService()

        const PORT = process.env.APP_PORT ? process.env.APP_PORT : "5000"
        const URL = process.env.APP_API_URL ? process.env.APP_API_URL : "http://localhost" + PORT

        const server = expressApp.listen(PORT, () => {
            DefaultLogger.info(`Web Server started: ${URL}`)
            DefaultLogger.info(`Graphql Server ready: ${URL}${apolloServer.graphqlPath}`)
        })
        server.setTimeout(420000);
    }catch (e) {
        DefaultLogger.error(err.message, err)
    }


}

startServer()
