import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 1.2rem;

    p {
      display: inline;

      color: ${({ theme: { colors } }) => colors.RED_400};

      font-weight: 700;
    }
  }
`;

export { Container, Section };
