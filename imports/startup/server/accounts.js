/**
 * Accounts Setup
 */

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Counters from '../../api/counters/counters.js';

Accounts.onCreateUser((options, user) => {
  // init counter at 0
  Counters.insert({
    _id: user._id,
    count: Number(0),
  });
  return user;
});

// remove # from password reset / enroll urls
Accounts.urls.resetPassword = (token) =>
  Meteor.absoluteUrl(`reset-password/${token}`);
Accounts.urls.enrollAccount = (token) =>
  Meteor.absoluteUrl(`enroll-account/${token}`);
