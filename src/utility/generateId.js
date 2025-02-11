export const generateId = () =>
  Math.random().toString().substring(2, 8);
console.log(generateId());

export const assignId = obj => ({...obj, id: generateId()});
