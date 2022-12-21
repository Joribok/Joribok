import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  position: fixed;
  background: transparent;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const MessageBox = styled.div`
  ${({ theme }) => `
    background: ${theme.colors.YELLOW_100};
    z-index: ${theme.zIndex.SNACK_BAR};
  `}
  display: flex;
  justify-content: center;
  font-size: 1rem;
  padding: 0.625rem;

  width: 80%;
  border-radius: 0.25rem;
  margin-bottom: 1.25rem;

  word-break: keep-all;
`;
