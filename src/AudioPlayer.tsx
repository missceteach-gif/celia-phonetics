'use client';
import {useEffect,useRef,useState} from 'react';
import {claimAudio,onOtherAudio,trackUrl} from './audio-utils';
export default function AudioPlayer({track,label}:{track:number;label?:string}) {
  const audio=useRef<HTMLAudioElement>(null);
  const [error,setError]=useState(false);
  useEffect(()=>{const a=audio.current;if(a)return onOtherAudio(a)},[]);
  return <div className="prAudio"><label htmlFor={'track-'+track}>{label||`Pista ${String(track).padStart(2,'0')} · Audio original`}</label><audio id={'track-'+track} ref={audio} controls preload="metadata" src={trackUrl(track)} onPlay={()=>{setError(false);if(audio.current)claimAudio(audio.current)}} onError={()=>setError(true)}/>{error&&<p role="alert">No se ha podido cargar el audio. <a href={trackUrl(track)} target="_blank" rel="noreferrer">Abrir la pista</a></p>}</div>;
}
