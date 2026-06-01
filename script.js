// textInput;

// wordCount;
// charCount;

// sentenceCount;
// vowelCount;

document.addEventListener("DOMContentLoaded", () => {
  const textinput = document.getElementById("textInput");
  const word = document.getElementById("wordCount");
  const char = document.getElementById("charCount");
  const sentence = document.getElementById("sentenceCount");
  const vowel = document.getElementById("VowelCount");

  textinput.addEventListener("input", () => {
    let text = textinput.value.trim();

    char.textContent = text.length;

    let wordcount = text.split(/\s+/).filter((word) => word.length > 0).length;

    word.textContent = wordcount;

    let sentencecount = text
      .split(/[.!?]+/)
      .filter((sen) => sen.length > 0).length;

    sentence.textContent = sentencecount;

    let vowelcount = text.match(/[aeiou]/gi);

    vowel.textContent = vowelcount ? vowelcount.length : 0;
  });
});

// TOGGLE THEME
document.addEventListener("DOMContentLoaded", () => {
  const themeBtn = document.getElementById("toggleTheme");

  const html = document.documentElement;
  themeBtn.addEventListener("click", () => {
    html.classList.toggle("dark");

    // CHANGE BUTTON TEXT

    if (html.classList.contains("dark")) {
      themeBtn.innerHTML = "☀️";
    } else {
      themeBtn.innerHTML = "🌙";
    }
  });
});
