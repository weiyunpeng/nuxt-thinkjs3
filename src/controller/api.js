const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    console.log(111)
    return this.display();
  }
};
