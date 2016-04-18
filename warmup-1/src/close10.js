/**
 * [close10 description]
 * @param  {[number]} a [description]
 * @param  {[number]} b [description]
 * @return {[number]}   [description]
 */
exports.close10 = function(a, b) {
  var diff10 = {
    a : Math.abs(10 - a),
    b : Math.abs(10 - b)
  };
  return (diff10.a === diff10.b)
    ? 0
    : {true : a, false: b}[diff10.a < diff10.b];
};

/* ==========================================
- close10(8, 13) → 8
- close10(13, 8) → 8
- close10(13, 7) → 0

Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.
========================================== */

