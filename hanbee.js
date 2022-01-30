/* html 추가사항
# tag
<link rel="stylesheet" href="hanbee.css">
<script defer src="hanbee.js"></script>

# textarea (options)
autofocus, placeholder
cols="30" rows="10" 기본값 제거
*/

const tbox = document.querySelector('#tbox');
const letters = document.querySelector('#letters');
const byte = document.querySelector('#byte');
const trim_letters = document.querySelector('#trim_letters');
const trim_byte = document.querySelector('#trim_byte');

const getByteLength = (letters) => {
  let byte = 0;
  for(let i=0; i<letters.length; i++) {
    const code = letters[i].charCodeAt(0);
    if(code > 127) byte += 2;
    else if(code > 64 && code < 91) byte +=2;
    else byte +=1;
  }
  return byte;
}

tbox.addEventListener('input', e =>{
  letters.textContent = e.target.value.length;
  trim_letters.textContent = e.target.value.replace(/(\s*)/g, "").length;

  byte.textContent = getByteLength(e.target.value);
  trim_byte.textContent = getByteLength(e.target.value.replace(/(\s*)/g, ""));
})