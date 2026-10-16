const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{const open=nav.style.display==='flex';nav.style.display=open?'':'flex';if(!open){nav.style.position='absolute';nav.style.top='68px';nav.style.right='22px';nav.style.flexDirection='column';nav.style.background='#0a0c10';nav.style.padding='18px';nav.style.border='1px solid #252b33';nav.style.zIndex='20'}});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const glow=document.querySelector('.cursor-glow');
window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
