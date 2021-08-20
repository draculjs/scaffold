import {ForbiddenError, AuthenticationError, UserInputError, ValidationError, ApolloError} from "apollo-server-errors";
import BaseError from './../../model/BaseErrorModel'

export default {
    Query: {
        errorNotAuthorized: (_) => {
            throw new ForbiddenError("Custom Message ForbiddenError")
        },
        errorAuthenticationError: (_) => {
            throw new AuthenticationError("Custom Message AuthenticationError")
        },
        errorUserInputError: (_) => {
            const baseError = new BaseError({
                name: 'abc123',
                age: 66,
                color: 'h'
            });
            let validationErrors = baseError.validateSync();
            throw new UserInputError("Custom Message UserInputError", {inputErrors: validationErrors.errors})
        },
        errorValidationError: (_) => {
            throw new ValidationError("Custom Message ValidationError")
        },
        errorApolloError: (_) => {
            throw new ApolloError("Custom Message ApolloError")
        },
    }
}
