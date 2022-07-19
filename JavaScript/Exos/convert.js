const data = {
  0: [1657633042499, "1.0000000066578572"],
  1: [1657633343359, "1.0000000066578572"],
  2: [1657633644580, "1.0000000066578572"],
  3: [1657633945954, "1.0000000066578572"],
  4: [1657634247027, "1.0000000066578572"],
  5: [1657634547932, "1.0000000066584704"],
  6: [1657634849430, "1.0000000066584704"],
  7: [1657635150338, "1.0000000066584704"],
  8: [1657635451341, "1.0000000066584704"],
};
console.log("data : ", data);
const convertData1 = Array.from(
  new Map(Object.values(data)),
  ([key, value]) => {
    return { key, value };
  }
);
console.log("convertData1 : ", convertData1);
/*
convertData1 :  [
  { key: 1657633042499, value: '1.0000000066578572' },
  { key: 1657633343359, value: '1.0000000066578572' },
  { key: 1657633644580, value: '1.0000000066578572' },
  { key: 1657633945954, value: '1.0000000066578572' },
  { key: 1657634247027, value: '1.0000000066578572' },
  { key: 1657634547932, value: '1.0000000066584704' },
  { key: 1657634849430, value: '1.0000000066584704' },
  { key: 1657635150338, value: '1.0000000066584704' },
  { key: 1657635451341, value: '1.0000000066584704' }
]
*/
const convertData2 = Object.values(data).reduce((acc, cur) => {
  acc.push({ [cur[0]]: cur[1] });
  return acc;
}, []);
console.log("convertData2 : ", convertData2);
/*
convertData2 :  [
  { '1657633042499': '1.0000000066578572' },
  { '1657633343359': '1.0000000066578572' },
  { '1657633644580': '1.0000000066578572' },
  { '1657633945954': '1.0000000066578572' },
  { '1657634247027': '1.0000000066578572' },
  { '1657634547932': '1.0000000066584704' },
  { '1657634849430': '1.0000000066584704' },
  { '1657635150338': '1.0000000066584704' },
  { '1657635451341': '1.0000000066584704' }
]
*/