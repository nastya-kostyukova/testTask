/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'someMysqlServer',
  tableName: 'user',

  schema: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  
  attributes: {
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    image: {
      type: 'binary',
      required: false,
    },
    pdf: {
      type: 'binary',
      required: false,
    }
  }
};

