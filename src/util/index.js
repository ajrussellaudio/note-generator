export const random = (max = 1) => Math.random() * max;
export const int = float => Math.floor(float);
export const choose = arr => arr[int(random(arr.length))];
