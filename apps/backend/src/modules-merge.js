const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')
import {securityResolvers,securityTypes} from '@dracul/user-backend'
import {dayjsTypes, dayjsResolvers } from '@dracul/dayjs-backend'

import {commonTypes, commonResolvers} from '@dracul/common-backend'
import {types as customTypes,resolvers as customResolvers} from '@dracul/customize-backend'
import {types as notificationTypes,resolvers as notificationResolvers} from '@dracul/notification-backend'
import {types as settingsTypes,resolvers as settingsResolvers} from '@dracul/settings-backend'

//BASE RESOLVERS
import {resolvers as baseResolvers } from './modules/base/graphql'
//BASE TYPEDEFS
import {types as baseTypes} from './modules/base/graphql'


export const resolvers = mergeResolvers([
    commonResolvers,
    dayjsResolvers,
    baseResolvers,
    securityResolvers,
    notificationResolvers,
    customResolvers,
    settingsResolvers
])

export const typeDefs = mergeTypeDefs([
    commonTypes,
    dayjsTypes,
    baseTypes,
    securityTypes,
    notificationTypes,
    customTypes,
    settingsTypes
])
