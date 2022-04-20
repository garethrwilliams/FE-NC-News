export function categoryBackground(category) {
  let backgroundColour = '';
  switch (category) {
    case 'cooking':
      backgroundColour = 'khaki';
      break;
    case 'football':
      backgroundColour = 'bisque';
      break;
    case 'coding':
      backgroundColour = 'lavender';
      break;
    default:
      backgroundColour = 'grey';
  }

  return {backgroundColor: `${backgroundColour}`};
}
