import ArticleList from '@/components/ArticleList';
import styled from '@emotion/styled';

const Home = () => {
  return (
    <Container>
      <Title>1000개의 계획이 모여있어요</Title>
      <ArticleList />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: fit-content;
`;

const Title = styled.h2`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  padding: 1rem;
  margin-bottom: 1.25rem;
`;
export default Home;
