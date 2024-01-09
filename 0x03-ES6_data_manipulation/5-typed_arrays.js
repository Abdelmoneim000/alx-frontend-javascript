export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position is out of bounds');
  }
  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;
  return view;
}
