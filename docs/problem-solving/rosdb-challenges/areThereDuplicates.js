function areThereDuplicates(...args) {
  const lookup = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === args[i + 1]) return true;

    const arg = args[i];

    if (lookup[arg]) {
      return true;
    } else {
      lookup[arg] = 1;
    }
  }

  return false;
}

module.exports = areThereDuplicates;
