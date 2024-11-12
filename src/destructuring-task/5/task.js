const shape = { type: "rectangle", dimensions: { width: 100, height: 50 } };
const { dimensions: { width, height }, type } = shape;
console.log(width, height, type)