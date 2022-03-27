function titleCase(title, minorWords) {

  const map = new Set(minorWords && minorWords.toLowerCase().split(' '));
  return (
    title &&
    title
      .toLowerCase()
      .split(' ')
      .map((word, index) => {
        if (index === 0) {
          word = word.slice(0, 1).toUpperCase() + word.slice(1);
          return word;
        }
        if (!map.has(word)) {
          word = word.slice(0, 1).toUpperCase() + word.slice(1);
          return word;
        }
        return word;
      })
      .join(' ')
  );
}
console.log(titleCase('The Wind In The Willows', 'In The'));
//should return: 'A Clash of Kings'
