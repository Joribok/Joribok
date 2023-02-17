import styled from '@emotion/styled';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  padding: 1.5rem 1.5rem 3rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const ShareButton = styled.button`
  background: none;
  border: none;

  padding: 0;

  cursor: pointer;

  svg:hover path {
    fill: ${({ theme: { colors } }) => colors.RED_500};

    transition: fill 0.2s;
  }
`;

const GaugeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  color: gray;

  span {
    text-align: center;
  }
`;

const PlanBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export { Container, Title, ShareButton, GaugeContainer, PlanBox };
