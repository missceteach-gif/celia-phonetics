import {createRoot} from 'react-dom/client';
import Practice from './Practice';
import './style.css';
const courses=[['E','/celia-phonetics/a1/pronunciation/e/','/e/ · /ɜː/ · /ə/','PEN, GIRL, ABOUT'],['I','/celia-phonetics/a1/pronunciation/i/','/i/ · /j/ · /iː/ · /ɪ/','HAPPY, YES, NEED, SIT'],['O','/celia-phonetics/a1/pronunciation/o/','/ɒ/ · /ɔː/','HOT, MORE']];
createRoot(document.getElementById('root')!).render(<main className="homePage nefPage">
<section style={{maxWidth:1100,margin:'24px auto',padding:'0 18px'}}>
<p style={{fontSize:'1rem',fontWeight:900,color:'#176e63'}}>A1 · PRONUNCIATION</p>
<h1>One sound at a time.</h1>
<p style={{fontSize:'1.16rem'}}>Elige una vocal. Cada sonido tiene su propia práctica, audios de la ficha, ejercicios y repaso. La vocal A continúa debajo.</p>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,215px),1fr))',gap:14,margin:'20px 0 36px'}}>
{courses.map(([v,href,ipa,words])=><a key={v} href={href} style={{display:'grid',gap:9,padding:23,background:'#fff',border:'2px solid #c9dfd9',borderRadius:20,textDecoration:'none',minHeight:170,color:'#174741'}}>
<strong style={{fontSize:'2.2rem'}}>{v}</strong>
<strong style={{fontSize:'1.34rem',color:'#0c7668'}}>{ipa}</strong>
<span style={{fontSize:'1.04rem'}}>{words}</span><b>ABRIR LOS SONIDOS →</b></a>)}
</div>
<h2 style={{marginBottom:9}}>A · CAT /æ/, CAR /ɑː/, CUP /ʌ/</h2>
</section><Practice/></main>);