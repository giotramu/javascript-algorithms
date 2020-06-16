// --- Frequency counter pattern solution
function areThereDuplicates(...args) {
  if (args.length === 0) return false;

  const collection = {};

  for (const arg of args) {
    collection[arg] = (collection[arg] || 0) + 1;
  }

  for (const val in collection) {
    if (collection[val] > 1) return true;
  }

  return false;
}

module.exports = areThereDuplicates;
