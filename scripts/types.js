/**
 * @typedef {Object} User
 * @property {string} name
 * @property {string} [link]
 * @property {ListType} list_name
 * @property {string} [created_at]
 * @property {string} [reason]
 * @property {string} [user_role]
 * @property {UserStatus} [status]
 */
/**
 * @typedef {'shame' | 'limbo' | 'glory'} ListType
 */
/**
 * @typedef {'active' | 'deleted' | 'banned'} UserStatus
 */