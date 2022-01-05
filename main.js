let sentence = "hello";
let newSentence = "";
let proba = sentence.slice(-1);
if (proba === "!") {
  for (let i = 1; i <= 5; i++) {
    newSentence += sentence;
    for (let j = 1; j < i; j++) {
      newSentence += "!";
    }
  }
  console.log(newSentence);
}
if (proba !== "!") {
  for (let i = 1; i <= 5; i++) {
    newSentence += sentence;
    for (let j = 1; j <= i; j++) {
      newSentence += "!";
    }
  }
  console.log(newSentence);
}
