export const AUDIO_EVENT = 'celia-pronunciation-audio';
export function claimAudio(audio: HTMLAudioElement | null) {
  window.dispatchEvent(new CustomEvent(AUDIO_EVENT, { detail: audio }));
}
export function onOtherAudio(audio: HTMLAudioElement) {
  const listener = (event: Event) => {
    if ((event as CustomEvent).detail !== audio) audio.pause();
  };
  window.addEventListener(AUDIO_EVENT, listener);
  return () => { window.removeEventListener(AUDIO_EVENT, listener); audio.pause(); };
}
export function trackUrl(track: number) { return `/celia-phonetics/audio/pronunciation/PISTA%20${String(track).padStart(2, '0')}.mp3`; }
