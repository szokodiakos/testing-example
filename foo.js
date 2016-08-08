'use strict';

exports.fun = function(a, b) {
  let result = '';
  if (a < 5) {
    result = 'aKicsi';
  }
  if (b < 5) {
    result = 'bKicsi';
  }
  return result;
}
