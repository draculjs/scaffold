import { gql } from "apollo-server-express";
import {mergeTypeDefs, mergeResolvers} from '@graphql-tools/merge';

import {securityResolvers,securityTypes} from '@dracul/user-backend'

import {commonTypes} from '@dracul/common-backend'
import {types as customTypes,resolvers as customResolvers} from '@dracul/customize-backend'
import {types as notificationTypes,resolvers as notificationResolvers} from '@dracul/notification-backend'
import {types as settingsTypes,resolvers as settingsResolvers} from '@dracul/settings-backend'

//BASE RESOLVERS
import {resolvers as baseResolvers } from './modules/base/graphql/index.js'
//BASE TYPEDEFS
import {types as baseTypes} from './modules/base/graphql/index.js'

import GraphQLUpload  from 'graphql-upload/GraphQLUpload.js'

const typeUploadDefs = gql`
  scalar Upload
`

console.log("securityTypes",securityTypes)

export const resolvers = mergeResolvers([
    {Upload: GraphQLUpload},
    baseResolvers,
    securityResolvers,
    notificationResolvers,
    customResolvers,
    settingsResolvers
])

export const typeDefs = mergeTypeDefs([
    typeUploadDefs,
    commonTypes,
    baseTypes,
    securityTypes,
    notificationTypes,
    customTypes,
    settingsTypes
])
