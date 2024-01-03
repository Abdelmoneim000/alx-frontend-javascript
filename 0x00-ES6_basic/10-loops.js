export default function appendToEachArrayValue(array, appendString) {
  const Arr = array;
  for (const idx of Arr) {
    Arr[Arr.indexOf(idx)] = appendString + idx;
  }

  return Arr;
}
