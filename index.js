class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.replace(str.charAt(0), str.charAt(0).toUpperCase())
  }
  static sanitize(str) {
    let sanitizedStr = ''
    str.split("").forEach(ch => {
      if (ch.match(/^[a-z0-9]+$/i) || (ch === " ") || (ch === "'") || (ch === "-")) {
        sanitizedStr += ch
      }
    })
    return sanitizedStr
  }
  static titleize(str) {

    
    const noNos = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    let strAsArray = str.split(" ")
    console.log()

    // let firstWord = Formatter.capitalize(strAsArray[0])
    // console.log(capWord)
  //  strAsArray.map(el => {
  //    console.log(strAsArray)

  //    return Formatter.capitalize(el)

  //  })
   
  let capitalArray = strAsArray.map(el => {
    if (noNos.includes(el)) {
      console.log(strAsArray.indexOf(el))
      return el
    } else {
      return Formatter.capitalize(el)
    }
  })
 
  capitalArray[0] = Formatter.capitalize(capitalArray[0])


  console.log(capitalArray)
  return capitalArray.join(" ")


  }

}