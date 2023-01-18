import styled from '@emotion/styled';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding: 2rem 1.5rem 3.5rem;
`;

const PlanContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1.2rem;
  }
`;

const PlanBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 0 1rem;

  list-style-type: goal-counter;

  font-size: 1.1rem;
`;

export { Container, PlanContainer, PlanBox };
