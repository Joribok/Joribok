import styled from '@emotion/styled';
export const Container = styled.section`
  position: fixed;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: ${({ theme }) => theme.colors.WHITE_100};

  z-index: 100;
`;

export const Title = styled.h2`
  display: block;
  font-size: 24px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 800;

  color: ${({ theme }) => theme.colors.BLUE_500};
`;
