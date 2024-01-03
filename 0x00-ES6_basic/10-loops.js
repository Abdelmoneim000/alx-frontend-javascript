export default function appendToEachArrayValue(array, appendString) {
  const Arr = array;
  for (const idx of Arr) {
    Arr[array.indexOf(idx)] = appendString + idx;
  }

  return Arr;
}
