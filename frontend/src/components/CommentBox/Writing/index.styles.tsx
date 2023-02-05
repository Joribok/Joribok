import styled from '@emotion/styled';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border: 0.8px solid gray;
  border-radius: 8px;

  padding: 1rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1rem;

  text-align: right;

  p {
    text-align: left;
  }
`;

const Input = styled.input`
  border: none;
  border-bottom: 0.8px solid gray;

  width: 100%;

  outline: none;
`;

const TextArea = styled.textarea`
  border: 0.8px solid gray;
  border-radius: 6px;

  width: 100%;
  height: 5rem;

  outline: none;
`;

export { Container, Title, Label, Input, TextArea };
