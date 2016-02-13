var test = require('blue-tape');

var delay = function (mtime) {
  return new Promise(function (resolve) {
    setTimeout(resolve, mtime);
  });
};

test('first', async function (t) {
  await delay(200);

  t.ok(1, 'first test');

  t.test('second', async function (t) {
    t.ok(1, 'second test');
  });
});

test('third', async function (t) {
  await delay(100);

  t.ok(1, 'third test');
});
