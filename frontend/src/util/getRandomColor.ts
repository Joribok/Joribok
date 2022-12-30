import theme from '@/styles/theme';

export const getRandomColor = () => {
  const colorList = [
    theme.colors.BLUE_100,
    theme.colors.GREEN_100,
    theme.colors.RED_100,
    theme.colors.YELLOW_100,
  ];
  return colorList[Math.floor(Math.random() * colorList.length)];
};
