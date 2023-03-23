import styled from "styled-components";

export const Container = styled.button`

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  border: none;
  border-radius: 10px;

  padding: 32px;
  text-align: left;

  h1{
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  
  img{
    margin: 8px 0 15px;
  }

  p{
    color: ${({ theme }) => theme.COLORS.GRAY_02};
    font-size: 16px;
    line-height: 19px;
  }

  footer{
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;