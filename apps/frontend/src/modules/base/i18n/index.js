import BaseMessages from './messages/BaseMessages'
import ErrorMessages from './messages/ErrorMessages'
import BasePermissionMessages from './permissions/BasePermissionMessages'
import merge from 'deepmerge'

const messages = merge.all([BaseMessages, ErrorMessages,BasePermissionMessages])

export default messages
