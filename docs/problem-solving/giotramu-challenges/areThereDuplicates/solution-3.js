// --- One liner solution
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}

module.exports = areThereDuplicates;
