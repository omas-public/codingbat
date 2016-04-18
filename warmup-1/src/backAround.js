/**
 * [backAround description]
 * @param  {[String]} str [description]
 * @return {[String]}     [description]
 */
exports.backAround = function(str) {
  // code here
  var last = str.substr(-1);
  return last + str + last;
};

/* ==========================================

- backAround("cat") → "tcatt"
- backAround("Hello") → "oHelloo"
- backAround("a") → "aaa"

Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.

========================================== */