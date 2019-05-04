function smokeTest() {
  return 'smoke';
}

test('smoke test', () => {
  expect(smokeTest()).toBe('smoke');
});
