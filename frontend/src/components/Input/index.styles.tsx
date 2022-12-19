import styled from '@emotion/styled';

const Input = styled.input<{ isValid: boolean }>`
  ${({ isValid, theme }) => `
    background: ${isValid ? theme.colors.WHITE_100 : theme.colors.RED_100};
    color: ${theme.colors.BLACK_500};

    border: solid ${theme.colors.YELLOW_500};
  `}

  border-radius: 4px;
  outline: none;

  font-weight: 700;
`;

const UnderlineInput = styled(Input)`
  border: 0;
  border-radius: 0;

  ${({ theme }) => `
    border-bottom: 1px solid ${theme.colors.BLACK_500};
  `}
`;

export { Input, UnderlineInput };
