import dotenv from 'dotenv'
dotenv.config()

import {InitService} from '@dracul/user-backend'
import {initPermissionsCustomization, initCustomization} from '@dracul/customize-backend'
import operatorRole from './custom/roles/initOperatorRole'
import managerRole from './custom/roles/initManagerRole'

import {
    permissions as notiPermissions
} from "@dracul/notification-backend"

import {
    permissions as settingsPermissions
} from '@dracul/settings-backend'

import {initSettings} from './custom/settings/initSettings'

import modulesPermissions from './custom/permissions/modulesPermissions'
import {testNotification} from "./custom/notifications/testNotification";
import {customizeInitialization} from "./custom/customize/customizeInitialization";

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

    await initCustomization(customizeInitialization)

    await testNotification()
}

export {initService}

export default initService
