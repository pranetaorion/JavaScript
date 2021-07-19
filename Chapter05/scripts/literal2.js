var Member = function(fistName, lastName) {
  this.fistName = fistName;
  this.lastName = lastName;
};

Member.prototype = {
  getName: function() {
    return this.lastName + ' ' + this.fistName;
  },
  toString: function() {
    return this.lastName + this.fistName;
  }
};