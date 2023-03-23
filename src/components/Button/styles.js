import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;
  line-height: 21px;

  opacity: 0.5;
  transition: all 0.5s;
  
  :hover{
    opacity: 1;
  }

  &:disabled{
    opacity: 0.5;
  }
`;