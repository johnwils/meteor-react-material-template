import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

const roles = ['admin', 'user'];

Meteor.startup(() => {
  roles.forEach((role) => Roles.createRole(role, { unlessExists: true }));
});
