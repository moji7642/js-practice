let x = confirm("wanna apply?")
if (x) {
    let FirstName = prompt("FirstName")
    let LastName = prompt("LastName")
    let age = +prompt("Your age")
    let PassWord = prompt("password")
 if (!FirstName || !LastName || !age || !PassWord ) {
    alert ("must answer");
 } else if (PassWord.length < 6 ) {
    alert ("password must be more than 6 character")
 } else if (age < 18 ) {
    alert ("under age")
 } else {
    alert (`${FirstName} ${LastName} apply compeleted ${PassWord}`)
 }
}


