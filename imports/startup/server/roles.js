import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

export const roles = ['admin', 'user'];

export const createRoles = () => {
  roles.forEach((role) => Roles.createRole(role, { unlessExists: true }));
};

Meteor.startup(() => {
  createRoles();
});
