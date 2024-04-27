//        /// normal method for creating strings:
/* let str = "Javeria Farooq"
document.write(str, "<br>") */


//         // template literals:
/* let firstName = "Javeria"
let lastName = "Farooq"
let age = 20
let marks = 74
let faculty = "Computer Science"

console.log(`my name is ${firstName} ${lastName}. I am ${age} years old. My faculty is ${faculty}. In this faculty my marks are ${marks}.`) */

//        // escape characters:
/* let fullName = "Javeria\nFarooq"
console.log(fullName)
document.write(fullName.length)
document.write(fullName, "<br>")

let secondName = "Javeria\tFarooq"
console.log(secondName)
document.write(secondName.length)
document.write(secondName, "<br>") */

//      // property(string.length):
/* let str2 = "Javeria Farooq"
document.write(str2.length, "<br>")
document.write(fullName.length) */

//      // string indices:
/* let str3 = "Javeria Farooq"
document.write(str3[0], " ", str3[8], "<br>") */

//         // string methods:

// toUpperCase:
/*
let str4 = "Javeria Farooq"
let res = str4.toUpperCase()
document.write(str4, "<br>")
document.write(res, "<br>") */

// toLowerCase:
/*
let str5 = "JAVERIA FAROOQ"
let res2 = str5.toLowerCase()
document.write(str5, "<br>")
document.write(res2, "<br>") */

// trim:
/* let str6 = "                    Javeria Farooq      JS  "
let res3 = str6.trim()
document.write(str6, "<br>")
console.log(str6)
document.write(res3, "<br>")
console.log(res3) */

// slice:

/* let str7 = "Javeria Farooq"
// let str8 = str7.slice(0, 7)
let str8 = str7.slice(0, str7.length-1)
document.write(str7, "<br>")
document.write(str8, "<br>") */

// concate:
/* let str = "Javeria"
let str2 = "Farooq"
// let str3 = str.concat(str2)
// let str4 = str2.concat(str)
// let str4 = str2+str
document.write(str, "<br>")
document.write(str2, "<br>")
document.write(str4, "<br>") */

// replace:
/* let str = "Javeria farooq"
// let res = str.replace("Javeria", "aleeza")
let res2 = str.replaceAll("a", "z")
document.write(str, "<br>")
document.write(res2, "<br>") */

// charAt:
// let str = "javeria farooq"
// let res = str.charAt(8)
// document.write(res, "<br>")


//       // practice questions:

// // qno:1

/* let userSym = "@"
let userInp = prompt("Enter Your full name")
let userLength = userInp.length
// let userName = userSym + userInp + userLength
let userName = userSym.concat(userInp, userLength)
document.write(userName) */

// let fullName = prompt("enter your full name")
// let userName = "@" + fullName + fullName.length
// document.write(userName)