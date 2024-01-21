const userInput = document.getElementById("user_input");
const letters = document.getElementById("letters");
const byte = document.getElementById("byte");
const trim_letters = document.getElementById("trim_letters");
const trim_byte = document.getElementById("trim_byte");

const getByteLength = (letters) => {
  let byte = 0;
  for (let i = 0; i < letters.length; i++) {
    const code = letters[i].charCodeAt(0);
    if (code > 127) byte += 2;
    else if (code > 64 && code < 91) byte += 2;
    else byte += 1;
  }
  return byte;
};

userInput.addEventListener("input", (e) => {
  letters.textContent = e.target.value.length;
  trim_letters.textContent = e.target.value.replace(/(\s*)/g, "").length;

  byte.textContent = getByteLength(e.target.value);
  trim_byte.textContent = getByteLength(e.target.value.replace(/(\s*)/g, ""));
});

// btn footer

const btn_copy = document.getElementById("btn_copy");
const btn_remove = document.getElementById("btn_remove");

btn_copy.addEventListener('click', () => {
  const text = userInput.value;
  userInput.select()
  navigator.clipboard.writeText(text)
});

btn_remove.onclick = () => {
  if (userInput.value.length > 0) {
    userInput.value = "";
    letters.textContent = "0";
    byte.textContent = "0";
    trim_letters.textContent = "0";
    trim_byte.textContent = "0";
  }
};
