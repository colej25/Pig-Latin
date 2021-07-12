function encodeVowelWord(word) {
  for (let i = 0; i < vowels.length; i++) {
    if (word.startsWith(vowels[i])) {
      return `${word}-yay`;
    }
  }
}

function encodeConsonantWord(word) {
  let extraLetters = [];
  for (let i = 0; i < word.length; i++) {
    let indexLetter = word[i];
    if (vowels.includes(indexLetter)) {
      let slicedWord = word.slice(i);
      return `${slicedWord}-${extraLetters.join("")}ay`;
    } else {
      extraLetters.push(word[i]);
    }
  }
}

function encodeWord(word) {
  let firstLetterOfWord = word[0];

  if (vowels.includes(firstLetterOfWord)) {
    return encodeVowelWord(word);
  } else {
    return encodeConsonantWord(word);
  }
}

function encodeText(text) {
  let result = "";
  let splitText = text.split(" ");

  for (let i = 0; i < splitText.length; i++) {
    let word = splitText[i];

    if (vowels.includes(word[0])) {
      result += encodeWord(word) + " ";
    } else {
      result += encodeConsonantWord(word) + " ";
    }
  }

  return result;
}
