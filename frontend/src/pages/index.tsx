import ArticleList from '@/components/ArticleList';
import HomeHeader from '@/components/HomeHeader';
import styled from '@emotion/styled';

const Home = () => {
  return (
    <Container>
      <HomeHeader />
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

export default Home;
