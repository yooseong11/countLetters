const tbox = document.querySelector("#tbox");
const letters = document.querySelector("#letters");
const byte = document.querySelector("#byte");
const trim_letters = document.querySelector("#trim_letters");
const trim_byte = document.querySelector("#trim_byte");

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

tbox.addEventListener("input", (e) => {
  letters.textContent = e.target.value.length;
  trim_letters.textContent = e.target.value.replace(/(\s*)/g, "").length;

  byte.textContent = getByteLength(e.target.value);
  trim_byte.textContent = getByteLength(e.target.value.replace(/(\s*)/g, ""));
});

// btn footer
const btn_copy = document.querySelector("#btn_copy");
const btn_remove = document.querySelector("#btn_remove");

btn_copy.onclick = () => {
  tbox.select();
  document.execCommand("copy");
};

btn_remove.onclick = () => {
  if (tbox.value.length > 0) {
    confirm("작성한 내용을 모두 삭제하시겠습니까?") && (tbox.value = "");
  }
};

// whale api
whale.sidebarAction.onClicked.addListener(result => {
  // result.opened: 사이드바가 열렸는지 닫혔는지를 알려주는 boolean 값. 열렸으면 true.
});

document.addEventListener(`visibilitychange`, function() {
  if (document.visibilityState === `visible`) {
      // 사이드바가 열렸을 때
  } else {
      // 사이드바가 닫혔을 때
  }
});