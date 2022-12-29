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

const InputLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  width: 96%;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;

  width: 7rem;

  font-size: 1.2rem;
  line-height: 1.2rem;

  padding: 1rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;

  input {
    width: 92%;
  }
`;

export { Container, InputSection, InputLabelContainer, Label, InputContainer };
