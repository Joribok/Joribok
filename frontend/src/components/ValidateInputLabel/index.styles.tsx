import styled from '@emotion/styled';

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

export { InputLabelContainer, Label, InputContainer };
