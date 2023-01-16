import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  padding: 1rem;
  margin: 3rem 0;

  h3 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const InputSection = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  width: 100%;

  p {
    width: 100%;

    font-size: 0.85rem;

    margin-bottom: 1rem;
  }
`;

export { Container, InputSection };
