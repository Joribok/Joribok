import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';

import { getArticle, getGauge } from '@/api/article';
import Gauge from '@/components/Gauge';
import Box from '@/components/Box';
import CommentBox from '@/components/CommentBox';
import useSnackBar from '@/hooks/useSnackBar';
import { getRandomColor } from '@/util/getRandomColor';

import * as S from './index.styles';

const Plan = () => {
  const router = useRouter();
  const id = Number(router.query.params);

  const { data } = useQuery([`article/${id}`], () => getArticle(id));
  const { data: gauge, refetch } = useQuery([`gauge/${id}`], () => getGauge(id));

  const { showSnackBar } = useSnackBar();

  const copyUrl = () => {
    window.navigator.clipboard.writeText(window.location.href).then(() => {
      showSnackBar('클립보드에 복사되었습니다.');
    });
  };

  if (!data || !gauge) return <>loading...</>;

  return (
    <S.Container>
      <div>
        <S.Title>
          <h1>{data.nickname} 님의 새해 목표예요 👋</h1>
          <S.ShareButton type="button" onClick={copyUrl}>
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.6604 35.1786C27.2805 32.5584 28.189 28.9403 27.2834 25.9264L31.1761 22.0337C31.5306 21.6792 31.7636 21.2266 31.8306 20.7536L32.916 13.354C32.9618 13.043 32.8625 12.7652 32.6761 12.5788C32.4896 12.3923 32.2119 12.293 31.9009 12.3389L24.5013 13.4243C24.0291 13.4932 23.5757 13.725 23.2211 14.0788L19.3285 17.9714C16.3146 17.0659 12.6964 17.9743 10.0763 20.5945L13.3183 23.8366C13.1016 23.958 12.8937 24.1162 12.687 24.3228C12.1682 24.8417 11.8185 25.5063 11.7029 26.1936C11.6079 26.7553 11.6683 27.3131 11.8773 27.8049C11.088 29.5513 11.3586 31.4559 12.5788 32.6761C13.1816 33.2789 13.9677 33.6612 14.8473 33.7801C15.7072 33.8981 16.6051 33.7583 17.4479 33.3755C17.9387 33.5852 18.4957 33.6464 19.0568 33.5522C19.7482 33.4334 20.4078 33.0864 20.9276 32.5681C21.1248 32.3709 21.2899 32.1603 21.4222 31.9451L24.658 35.1809L24.6604 35.1786ZM25.2441 30.3812C25.0961 30.9187 24.8849 31.4447 24.6162 31.9414L22.8594 30.1846L25.4256 27.6185C25.5602 28.5176 25.4983 29.459 25.2441 30.3812ZM20.7372 19.3801L24.5946 15.5227L30.6147 14.6402L29.7322 20.6602L21.5336 28.8588L16.396 23.7212L20.7372 19.3801ZM13.3135 20.6387C13.8101 20.3699 14.3362 20.1588 14.8737 20.0107C15.803 19.7567 16.7423 19.6958 17.6364 19.8293L15.0702 22.3954L13.3135 20.6387ZM18.6418 31.4233C18.4636 31.386 18.3112 31.2899 18.2077 31.1489L17.8601 30.6886L17.3466 31.0861C16.3449 31.864 14.9898 31.8519 14.1964 31.0584C13.403 30.265 13.3908 28.9099 14.1688 27.9082L14.5686 27.3924L14.106 27.0471C13.9666 26.9409 13.8711 26.7878 13.8339 26.6107C13.771 26.3131 13.8775 25.9829 14.1147 25.7457C14.3635 25.4969 14.6924 25.4125 14.9759 25.4894L19.7675 30.281C19.8442 30.569 19.7577 30.8957 19.5112 31.1423C19.2696 31.3797 18.9371 31.4885 18.6418 31.4233ZM24.2626 19.0035C23.9637 19.3024 23.7818 19.6938 23.757 20.0916C23.7321 20.4895 23.8663 20.8611 24.13 21.1248C24.3937 21.3886 24.7654 21.5227 25.1632 21.4979C25.561 21.473 25.9525 21.2911 26.2513 20.9922C26.5502 20.6934 26.7321 20.302 26.757 19.9041C26.7818 19.5063 26.6476 19.1347 26.3839 18.8709C26.1202 18.6072 25.7485 18.473 25.3507 18.4979C24.9529 18.5227 24.5615 18.7046 24.2626 19.0035Z"
                fill="black"
              />
            </svg>
          </S.ShareButton>
        </S.Title>
        <S.GaugeContainer>
          <Gauge gauge={gauge} />
          <span>여러분이 생각하시는 달성률을 댓글로 적어주세요!</span>
        </S.GaugeContainer>
      </div>
      <S.PlanBox>
        {data.plans.map((plan, idx) => (
          <Box color={getRandomColor()} key={idx}>
            {plan}
          </Box>
        ))}
      </S.PlanBox>
      <CommentBox id={id} refetchGauge={refetch} />
    </S.Container>
  );
};

export default Plan;
