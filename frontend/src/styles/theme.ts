const colors = {
  GREEN_500: '#36AE7C',
  GREEN_400: '#54CA99',
  GREEN_300: '#7FD7B2',
  GREEN_200: '#A9E4CC',
  GREEN_100: '#D4F2E5',
  YELLOW_500: '#F9D923',
  YELLOW_400: '#FAE151',
  YELLOW_300: '#FBE879',
  YELLOW_200: '#FDF0A6',
  YELLOW_100: '#FEF7D2',
  RED_500: '#EB5353',
  RED_400: '#EF7676',
  RED_300: '#F39696',
  RED_200: '#F7BABA',
  RED_100: '#FBDADA',
  BLUE_500: '#187498',
  BLUE_400: '#21A1D3',
  BLUE_300: '#53BBE4',
  BLUE_200: '#8CD2ED',
  BLUE_100: '#C6E8F6',
  BLACK_500: '#000000',
  WHITE_100: '#FFFFFF',
};

const zIndex = {
  SNACK_BAR: 10,
  HEADER: 998,
  SLIDER: 999,
};

const theme = {
  colors,
  zIndex,
} as const;

export default theme;
