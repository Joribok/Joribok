import LuckyBox from '@/components/LuckyBox';

import * as S from './index.styles';

const lucky = () => {
  return (
    <S.Container>
      <h1>행운 뽑기 🍀</h1>
      <LuckyBox luck="오늘은 복권을 사야할지도?" object="맥북" color="파스텔 블루" />
    </S.Container>
  );
};

export default lucky;
