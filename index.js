class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^-'\sA-Za-z0-9]+/g, '');
  }

  static titleize(str) {
    const invalid = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return str.split(" ").map(function(word, i) {
      if (i === 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else if (invalid.includes(word)) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    }).join(" ")
  }
}