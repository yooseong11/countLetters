const btn_copy = document.querySelector("#btn_copy");
const btn_remove = document.querySelector("#btn_remove");
const tbox = document.querySelector("#tbox");

btn_copy.onclick = () => {
  tbox.select();
  document.execCommand("copy");
};

btn_remove.onclick = () => {
  if (tbox.value.length > 0) {
    confirm("작성한 내용을 모두 삭제하시겠습니까?") && (tbox.value = "");
  }
};
