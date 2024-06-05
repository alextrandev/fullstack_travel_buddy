export const roundTemp = t => Math.round(t);
export const capitalized = s => s[0].toUpperCase() + s.slice(1);
export const random = n => Math.floor(Math.random() * n);
export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};