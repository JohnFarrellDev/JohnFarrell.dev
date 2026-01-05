export function fisherYatesShuffle<T>(arr: T[]) {
  // fisher-yates random shuffling algorithm
  let m = arr.length;
  while (m) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    const t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}
