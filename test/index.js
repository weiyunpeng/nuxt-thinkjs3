const test = require('ava');
const path = require('path');
require(path.join(process.cwd(), 'development.js'));

test('first test', t => {
  const indexModel = think.model('index');
})
