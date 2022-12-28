import * as S from './index.styles';

interface HomeHeaderProps {
  totalCount: number;
}

const HomeHeader = ({ totalCount }: HomeHeaderProps) => {
  return (
    <S.Title>
      <span>{totalCount}개</span>의 계획이 모여있어요
    </S.Title>
  );
};

export default HomeHeader;
