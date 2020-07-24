// Publications to the client

import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
  Meteor.publish(null, function () {
    if (this.userId) {
      return Meteor.roleAssignment.find({ 'user._id': this.userId });
    }
    return this.ready();
  });
}
