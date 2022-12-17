import { Meta, Story } from '@storybook/react';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';

import { snackBarStateAtom } from '@/store';
import SnackBar from '.';

export default {
  title: 'SnackBar',
  component: SnackBar,
} as Meta;

const snackBarElement = document.createElement('div');
snackBarElement.setAttribute('id', 'snack-bar');
document.body.append(snackBarElement);

const MockSnackBar = () => {
  const setSnackBarState = useSetAtom(snackBarStateAtom);

  useEffect(() => {
    setSnackBarState({
      isActive: true,
      message: '스토리북 테스트 문구입니다 두 줄 이상일 때에는 이렇게 표시됩니다 ',
    });
    let timer = setTimeout(() => {
      setSnackBarState({
        isActive: false,
        message: '',
      });
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [setSnackBarState]);

  return <SnackBar />;
};

const Template: Story = () => <MockSnackBar />;

export const DefaultSnackBar = Template.bind({});
