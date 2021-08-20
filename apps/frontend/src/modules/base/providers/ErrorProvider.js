import apolloClient from '../../../apollo'
import gql from "graphql-tag";
class ErrorProvider {

    constructor() {
        this.gqlc = null
    }

    setGqlc(gqlc){
        this.gqlc = gqlc
    }

    errorNotAuthorized(){
        return this.gqlc.query({
            query: gql`query {errorNotAuthorized}`
        })
    }

    errorAuthenticationError(){
        return this.gqlc.query({
            query: gql`query {errorAuthenticationError}`
        })
    }

    errorUserInputError(){
        return this.gqlc.query({
            query: gql`query {errorUserInputError}`
        })
    }

    errorApolloError(){
        return this.gqlc.query({
            query: gql`query {errorApolloError}`
        })
    }

    errorMulti(){
        return this.gqlc.query({
            query: gql`query {errorNotAuthorized errorAuthenticationError errorApolloError }`
        })
    }

}
const errorProvider = new ErrorProvider()
errorProvider.setGqlc(apolloClient)
export default errorProvider
