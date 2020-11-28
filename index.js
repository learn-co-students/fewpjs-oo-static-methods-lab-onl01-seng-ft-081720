class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }
  static titleize(string) {
    let spl = string.split(" ")
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    for ( let n = 0; n < spl.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( spl[ n ] ) )
      } else {
        if ( except.includes( spl[ n ] ) ) {
          result.push( spl[ n ] )
        } else {
          result.push( this.capitalize( spl[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}