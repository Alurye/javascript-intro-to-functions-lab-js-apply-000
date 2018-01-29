function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  return console.log(string.toUpperCase());
}

function logWhisper(string){
  return console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
<<<<<<< HEAD
  if (string === "hello" ) {
  return "I can\'t hear you!";
}  else if (string === "I love you, Grandma.") {
      return "I love you, too.";
=======
  if (!string.toUpperCase()) {
    return "I can't hear you!";
  } else if (string === "I love you, Grandma.") {

  return "I love you, too.";
>>>>>>> d9d1aace5f9fe33338be533618e23e81252c6a90
  } else {
  return "YES INDEED!";
  }
}
