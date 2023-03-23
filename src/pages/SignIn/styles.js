import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  text-align: center;

  > h1{
    font-size: 48px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2{
    font-size: 24px;
    margin-block: 48px;
  }

  > p{
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_04};
  }

  > a{
    margin: 48px auto 0;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;