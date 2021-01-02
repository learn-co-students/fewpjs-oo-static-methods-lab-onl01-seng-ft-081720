class Formatter {
  static capitalize(string) {
     return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^-'\sA-Za-z0-9]+/g,'');
  }

  static titleize(string) {
    const invalid = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return string.split(" ").map(function(word, i) {
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