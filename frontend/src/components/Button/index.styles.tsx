import styled from '@emotion/styled';

const Button = styled.button<{ isAvailable: boolean }>`
  ${({ isAvailable, theme }) => `
    background: ${isAvailable ? theme.colors.GREEN_500 : theme.colors.YELLOW_500};
    color: ${theme.colors.WHITE_100};
  `}

  border: none;
  border-radius: 4px;

  font-weight: 700;

  cursor: pointer;
`;

const SmallButton = styled(Button)`
  min-width: 4rem;

  padding: 0.4rem 2rem;
`;

const MediumButton = styled(Button)`
  min-width: 8rem;

  padding: 0.6rem 3rem;
`;

const LargeButton = styled(Button)`
  min-width: 12rem;

  padding: 0.8rem 4rem;
`;

export { SmallButton, MediumButton, LargeButton };
