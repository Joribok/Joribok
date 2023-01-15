import styled from '@emotion/styled';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  width: 100%;
  text-align: center;
  margin-top: 20px;
  span {
    ${({ theme }) => `
      color: ${theme.colors.YELLOW_500};
    `}
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;

  margin-top: 20px;

  input {
    width: 60%;
  }

  button {
    width: 50px;
  }
`;

export const InputResultContainer = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;

  width: 80%;
  height: 400px;

  overflow-y: scroll;
  overflow-x: hidden;

  scroll-behavior: smooth;

  border-radius: 4px;

  margin: 30px 0;
`;

export const EmptyMessage = styled.div`
  font-size: 18px;
  margin: auto;
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    width: 80%;

    &:hover,
    &:active {
      ${({ theme }) => `
        background-color: ${theme.colors.GREEN_300};
      `}
    }
  }
`;
