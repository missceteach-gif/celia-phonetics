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
<section style={{margin:'26px 0 40px'}}>
<p style={{fontSize:'1rem',fontWeight:900,color:'#176e63'}}>A1 · ENGLISH FILE · NEF ACTIVITIES</p>
<h2 style={{fontSize:'clamp(1.7rem,4vw,2.5rem)',margin:'9px 0'}}>Units 1, 2 & 3 · Play & practise</h2>
<p style={{fontSize:'1.15rem',marginBottom:18}}>Vocabulario, fotografías de los bancos del libro, inglés ↔ español, ordenar frases, gramática, completar huecos y autocorrección. Práctica para adultos de nivel A1.</p>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,240px),1fr))',gap:14}}>
{[['1','Hello, everybody!','Revisión complementaria 1A–1C'],['2','Your desk & you','2A–2C · Ordenar frases y vocabulario'],['3','Great Britain?','3A–3C · Present simple & jobs']].map(([n,t,d])=><a href={'/celia-phonetics/a1/nef-activities/unit-'+n+'/'} key={n} style={{display:'grid',gap:8,padding:24,border:'2px solid #c9dfd9',borderRadius:18,background:'#fff',color:'#174741',textDecoration:'none'}}>
<b style={{fontSize:'2rem'}}>📚 Unit {n}</b><strong style={{fontSize:'1.2rem'}}>{t}</strong><span>{d}</span><b>JUGAR · PLAY →</b></a>)}
</div></section>
<section style={{margin:'26px 0 38px',padding:24,borderRadius:20,background:'#fff5df',border:'2px solid #e8c887'}}>
<p style={{fontSize:'1rem',fontWeight:900,color:'#8a5b25'}}>A1 · READING & WRITING · HOMEWORK PREVIEW</p>
<h2 style={{fontSize:'clamp(1.6rem,4vw,2.3rem)',margin:'8px 0'}}>Messages, notes &amp; notices</h2>
<p style={{fontSize:'1.1rem',marginBottom:16}}>Mensajes, notas y avisos · Comprensión, imperativos y tres tareas de escritura. <b>Versión de práctica:</b> las respuestas todavía no se envían a la profesora.</p>
<a href="/celia-phonetics/a1/homework/messages-notes-notices/" style={{display:'inline-block',padding:'14px 22px',background:'#176e63',color:'#fff',borderRadius:12,fontWeight:800,textDecoration:'none'}}>OPEN THE ACTIVITY · ABRIR ACTIVIDAD →</a>
</section>
<h2 style={{marginBottom:9}}>A · CAT /æ/, CAR /ɑː/, CUP /ʌ/</h2>
</section><Practice/></main>);