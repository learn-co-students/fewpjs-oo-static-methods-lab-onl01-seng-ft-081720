class Formatter {
  static capitalize (str) {
    let x = str.split('')
    let y = x[0].toUpperCase()
    if (x.length > 1) {
      return [y, ...x.slice(1)].join('')
    } else {
      return y
    }
  }

  static sanitize (str) {
    let regex = /[a-z]/gi
    let y = str.match(regex)
    return y.join('')
  } 

  static titleize (str) {
    let arr = str.split(' ')
    let noNoWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let thisStupidShit = []
    arr.forEach(function(x){
      // console.log(x)
      // console.log(arr.indexOf(x) === 0)
      // console.log(!noNoWords.some(y => y === x))
      if (!noNoWords.some(y => y === x) || arr.indexOf(x) === 0){
        thisStupidShit.push(Formatter.capitalize(x))
      } else {
        thisStupidShit.push(x)
      }
    })
    console.log(thisStupidShit)
    return thisStupidShit.join(' ')
  }
}