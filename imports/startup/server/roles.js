import { Meteor } from 'meteor/meteor';

const roles = ['admin', 'user'];

Meteor.startup(() => {
  roles.forEach((role) => Roles.createRole(role, { unlessExists: true }));
});
