import styled from '@emotion/styled';

import { Align } from '@/types';

const Box = styled.div<{ color: string; align: Align }>`
  display: flex;
  justify-content: ${({ align }) => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'center':
        return 'center';
    }
  }};

  background: ${({ color }) => color};

  border-radius: 8px;
  padding: 1.5rem;

  word-break: break-all;
`;

export { Box };
