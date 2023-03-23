import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_100};
  color: ${({ theme }) => theme.COLORS.GRAY_03};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_03}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button{
    border: none;
    background: none;

    svg{
      width: 22px;
      height: 22px;
    }
  }

  .button-delete, .button-add { 
    color: ${({ theme}) => theme.COLORS.PINK};
  }
  
  >input {
    height: 24px;
    width: 100%;

    
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme}) => theme.COLORS.GRAY_03};
    }
  }

`;