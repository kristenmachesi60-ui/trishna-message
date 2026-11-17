const SECRET_CODE = '220808';
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const overlay = document.getElementById('overlay');
const codeInput = document.getElementById('codeInput');
const enterBtn = document.getElementById('enterBtn');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const errorMsg = document.getElementById('errorMsg');

/* floating hearts background */
(function makeHearts(){
  const bg = document.getElementById('hearts');
  const chars = ['❤️','🩷','💗','💖','💕','💘','💝'];
  for(let i=0;i<22;i++){
    const h = document.createElement('span');
    h.className = 'heart';
    h.textContent = chars[Math.floor(Math.random()*chars.length)];
    h.style.left = Math.random()*100 + 'vw';
    h.style.fontSize = (14 + Math.random()*22) + 'px';
    h.style.animationDuration = (7 + Math.random()*10) + 's';
    h.style.animationDelay = (Math.random()*8) + 's';
    bg.appendChild(h);
  }
})();

/* hearts inside popup */
(function makePopupHearts(){
  const box = document.querySelector('.popup-hearts');
  const chars = ['❤️','🩷','💗','💖','💕','💘','💝'];
  for(let i=0;i<14;i++){
    const h = document.createElement('span');
    h.textContent = chars[Math.floor(Math.random()*chars.length)];
    h.style.left = Math.random()*100 + '%';
    h.style.fontSize = (14 + Math.random()*18) + 'px';
    h.style.animationDuration = (3 + Math.random()*4) + 's';
    h.style.animationDelay = (Math.random()*4) + 's';
    box.appendChild(h);
  }
})();

function checkCode(){
  const val = codeInput.value.trim();
  if(val === SECRET_CODE){
    screen1.classList.remove('active');
    screen2.classList.add('active');
  } else {
    errorMsg.textContent = "Oops! That's not the right code, BEAUTY ❤️ Try again.";
    errorMsg.classList.remove('show');
    void errorMsg.offsetWidth;
    errorMsg.classList.add('show');
    codeInput.value = '';
    codeInput.focus();
  }
}

enterBtn.addEventListener('click', checkCode);
codeInput.addEventListener('keydown', e => { if(e.key === 'Enter') checkCode(); });
openBtn.addEventListener('click', () => overlay.classList.add('open'));
closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', e => { if(e.target === overlay) overlay.classList.remove('open'); });

codeInput.focus();


/* love choice buttons */
const loveBtn=document.getElementById('loveBtn');
const dontBtn=document.getElementById('dontBtn');
const dontMsg=document.getElementById('dontMsg');
const finalMsg=document.getElementById('finalMsg');
const letterBox=document.querySelector('.letter');
const choicesBox=document.querySelector('.choices');
const closeBtnEl=document.getElementById('closeBtn');
loveBtn.addEventListener('click',()=>{
  letterBox.style.display='none';
  choicesBox.style.display='none';
  closeBtnEl.style.display='none';
  dontMsg.textContent='';
  finalMsg.style.display='block';
});
dontBtn.addEventListener('click',()=>{
  const popup=document.querySelector('.popup');
  const pw=popup.clientWidth-70, ph=popup.clientHeight-50;
  dontBtn.style.position='absolute';
  dontBtn.style.left=(20+Math.random()*Math.max(pw,50))+'px';
  dontBtn.style.top=(20+Math.random()*Math.max(ph,50))+'px';
  dontBtn.style.zIndex='5';
  dontMsg.textContent='Sorry you cant click here';
});
