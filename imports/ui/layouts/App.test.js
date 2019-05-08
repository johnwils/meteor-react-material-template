import { Meteor } from 'meteor/meteor';

function smokeTest() {
  return 'smoke';
}

if (Meteor.isClient) {
  test('smoke test', () => {
    expect(smokeTest()).toBe('smoke');
  });
}
