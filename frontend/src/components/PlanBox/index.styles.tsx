import styled from '@emotion/styled';

import { AiOutlineClose } from 'react-icons/ai';

export const Container = styled.li<{ randomColor: string }>`
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: 3.125rem;
  list-style: none;
  border-radius: 10px;

  ${({ randomColor }) => `
    background-color: ${randomColor};
  `}
`;

export const Content = styled.div``;

export const DeleteButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  border: none;

  ${({ theme }) => `
    background-color: ${theme.colors.RED_500};

    &:hover, 
    &:active{
      background-color: ${theme.colors.RED_300};
    }
  `}
`;

export const DeleteIcon = styled(AiOutlineClose)`
  font-size: 1rem;
  padding: 0;
  margin: 0;
  ${({ theme }) => `
    color: ${theme.colors.WHITE_100};
  `}
`;
