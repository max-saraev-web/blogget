export const generateId = () =>
  Math.random().toString().substring(2, 8);

export const assignId = obj => ({...obj, id: generateId()});
