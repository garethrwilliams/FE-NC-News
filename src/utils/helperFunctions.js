function categoryBackground(category) {
  let backgroundColour = '';
  switch (category) {
    case 'cooking':
      backgroundColour = '#a17602';
      break;
    case 'football':
      backgroundColour = '#3fb0ac';
      break;
    case 'coding':
      backgroundColour = '#173e43';
      break;
    default:
      backgroundColour = '#dddfd4';
  }

  return { backgroundColor: `${backgroundColour}` };
}

function capitalise(word) {
  return word
    .split('')
    .map((letter, i) => {
      if (i === 0) {
        return letter.toUpperCase();
      }
      return letter;
    })
    .join('');
}

function uncapitalise(word) {
  return word
    .split('')
    .map((letter, i) => {
      if (i === 0) {
        return letter.toLowerCase();
      }
      return letter;
    })
    .join('');
}

export { categoryBackground, capitalise, uncapitalise };
