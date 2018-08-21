// The question in essence asks us to implement our own version of 'map'
export const accumulate = function(arr, acc) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // for each element, we invoke the accumulator cb and push its return value
    result.push(acc(arr[i]));
  }

  return result;
};
