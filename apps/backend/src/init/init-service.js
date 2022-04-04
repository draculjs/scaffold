import dotenv from 'dotenv'
dotenv.config()

import {InitService} from '@dracul/user-backend'
import {initPermissionsCustomization} from '@dracul/customize-backend'
import {initCustomization} from './custom/initCustomization'
import operatorRole from './custom/initOperatorRole'
import managerRole from './custom/initManagerRole'

import {
    permissions as notiPermissions
} from "@dracul/notification-backend"

import {
    permissions as settingsPermissions
} from '@dracul/settings-backend'

import {initSettings} from './custom/initSettings'

import modulesPermissions from './custom/modulesPermissions'
import {testNotification} from "./custom/testNotification";

const initService = async () => {

    //Default user Permissions
    await InitService.initPermissions()

    //Notification permissions
    await InitService.initPermissions([
        notiPermissions.NOTIFICATION_SHOW,
        notiPermissions.NOTIFICATION_CREATE,
        notiPermissions.NOTIFICATION_UPDATE
    ])

    //Settings Permissions
    await InitService.initPermissions([
        settingsPermissions.SETTINGS_CREATE,
        settingsPermissions.SETTINGS_UPDATE,
        settingsPermissions.SETTINGS_DELETE,
        settingsPermissions.SETTINGS_SHOW,
    ])

    //Init settings
    await initSettings()

    //Dracul Customization module Permissions
    await initPermissionsCustomization()

    //Custom Module permissions
    await InitService.initPermissions(modulesPermissions)

    await InitService.initAdminRole()
    await InitService.initOperatorRole()
    await InitService.initSupervisorRole()

    await InitService.initRoles([operatorRole,managerRole])

    await InitService.initRootUser()
    await InitService.initSupervisorUser()
    await InitService.initOperatorUser()

    await initCustomization()

    await testNotification()
}

export {initService}

export default initService
