export const soundKeys = ['æ', 'ɑː', 'ʌ'] as const;
export const soundLabels = ['CAT · /æ/', 'CAR · /ɑː/', 'CUP · /ʌ/'];
export const missions = [
  ['Palabras', 'Escucha y repite', '5–7 min'],
  ['Escucha y elige', 'Práctica guiada', '2 min'],
  ['Frases', 'Sigue la voz', '5–6 min'],
  ['Practica CAT /æ/', 'Ficha p. 9 · Pista 03', '1 min'],
  ['Practica CAR /ɑː/', 'Ficha pp. 10–11 · Pistas 05–06', '2 min'],
  ['Practica CUP /ʌ/', 'Ficha pp. 12–13 · Pistas 08–09', '3 min'],
  ['Compara sonidos', 'Ficha p. 14 · Pista 10', '2 min'],
  ['Repaso de la ficha', 'Ficha p. 14 · Pistas 11–13', '4–6 min'],
];
export const shortOptions = ['triste', 'gato', 'partido', 'manzana', 'arañar', 'aplaudir', 'eso', 'poder', 'jamón', 'piso', 'empecé', 'hombre'];
export const shortCorrect = ['manzana', 'aplaudir', 'triste', 'jamón', 'eso', 'hombre', 'gato'];
export const longOptions = ['tarjeta', 'manteca', 'alquitrán', 'envase', 'coche', 'chispa', 'daño', 'puro', 'cicatriz', 'agudo', 'personal', 'tarro'];
export const longCorrect = ['coche', 'chispa', 'agudo', 'alquitrán', 'puro'];
export const cupSequence = ['other','love','touch','some','young','some','month','done','son','month','other','some','cover','done','some','young','young','other','cover','month','other','son','touch','love','some','other','done','touch','done','love'];
export const reviewSequence = ['heart','cat','calm','come','pack','hut','ran','park','cut','hut','run','park','heart','hat','rang','come','rang','cut','come','heart','rang','ran','hut','run','hat','come','ran','park','heart','cat','run','rang','pack','come'];
export const cupCountWords = ['month','other','cover','son','touch','love','done','some','young'];
export const reviewCountWords = ['cut','ran','rang','come','park','heart','cat','pack','hat','calm','run','hut'];
export function countSequence(sequence: string[], word: string) { return sequence.filter(x => x === word).length; }
export const bricks = ['Monday','sun','nut','son','comedy','become','tough','fun','young','money','much','such','cover','shut','gun'];
export const baskets: Record<string,string> = {duck:'ʌ', heart:'other', back:'æ', stuff:'ʌ', rang:'æ', pack:'æ', come:'ʌ', hut:'ʌ', cat:'æ', but:'ʌ', rung:'ʌ'};
export const comparisonGroups = [
  {title:'CAT /æ/ & CUP /ʌ/', pairs:[['cat','cut','gato · cortar'],['bat','but','murciélago · pero'],['mad','mud','loco · barro'],['bag','bug','bolsa · bicho'],['cap','cup','gorra · taza'],['fan','fun','fan · diversión'],['hat','hut','sombrero · choza'],['I ran',"I’ve run",'corrí · he corrido'],['I began',"I’ve begun",'empecé · he empezado'],['lack','luck','escasez · suerte'],['I sang',"I’ve sung",'canté · he cantado'],['I rang',"I’ve rung",'llamé · he llamado']]},
  {title:'CAT /æ/, CUP /ʌ/ & CAR /ɑː/', pairs:[['hat','hut','heart','sombrero · choza · corazón'],['cat','cut','cart','gato · cortar · carrito'],['lack','luck','lark','escasez · suerte · alondra'],['ban','bun','barn','prohibición · bollo · granero']]},
  {title:'CAT /æ/ & CAR /ɑː/', pairs:[['at','art','en · arte'],['match','March','partido · marzo'],['back','bark','atrás · ladrar'],['hat','heart','sombrero · corazón'],['pack','park','empaquetar · aparcar']]},
  {title:'CUP /ʌ/ & CAR /ɑː/', pairs:[['stuff','staff','cosas · personal'],['bus','bars','autobús · bares'],['duck','dark','pato · oscuro'],['bun','barn','bollo · granero'],['hut','heart','choza · corazón'],['come','calm','venir · calma']]},
];
export const reviewSentences = ['It was fun at the bar that night.', 'I parked the car next to the dark bus at the back of the barn.', 'In March I saw John running with a hat in his hand and a cat in a cart.'];
export const sentenceCounts = [[2,1,1],[2,4,1],[4,2,1]];
export const sentenceExplanation = [
  '/æ/: at, that (2). /ɑː/: bar (1). /ʌ/: fun (1).',
  '/æ/: at, back (2). /ɑː/: parked, car, dark, barn (4). /ʌ/: bus (1).',
  '/æ/: hat, hand, and, cat (4). /ɑː/: March, cart (2). /ʌ/: running (1). Si reduces and a /ənd/, el primer total es 3; también es válido.',
];
