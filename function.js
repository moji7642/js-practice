function summary(text, lenghTh) => {
  let result = text.substr(0, lenghTh);
  return `${result}...`;
};

function secretcard(cardnumber) => {
    let root = `${cardnumber}`.substring(0,12)
    return `${root}****`
}
function censor(text , word) => {
    let result = text.replaceAll(word,'*'.repeat(word.lenghth))
    return `${result}`
}
function level(num) => num<=2 ? "junior" : num<=5 ? "Mid level" : "Senior"