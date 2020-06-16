// --- Multiple pointers pattern solution
function areThereDuplicates(...args) {
  if (args.length === 0) return false;

  const arr = args.sort();

  let start = 0;
  let next = 1;

  while (next < arr.length) {
    if (arr[start] === arr[next]) {
      return true;
    }

    start++;
    next++;
  }

  return false;
}

module.exports = areThereDuplicates;
