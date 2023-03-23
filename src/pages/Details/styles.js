import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: "header" "content";

  > main{
    grid-area: content;
    padding: 64px 0;
  }
`;

export const Content = styled.div`
  max-width: 1440px; 
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  padding-right: 10px;
  overflow-y: auto;
  max-height: 75vh;

  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;

  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: pink;
  }

  > h1{
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
  }

  > p{
    font-size: 16px;
    margin-top: 40px;
    text-align: justify;
  }

  > section{
    display: flex;
    flex-direction: row;
    gap: 8px;
    margin: 0;

    > div:first-child{
      display: none;
    }

    span{
      margin: 0;
      padding: 8px 16px;
      color: ${({ theme }) => theme.COLORS.GRAY_03};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
  }
`;

export const TopHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 19px;

  margin-top: 24px;

  > span{
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 22px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > span img{
    width: 150px;
    margin: 8px 0 15px;
  }
`;

export const Author = styled.div`
  display: flex;
  gap: 8px;
  margin: 24px 0 40px;

  > span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  > span img{
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  > span svg{
    stroke: ${({ theme }) => theme.COLORS.PINK};
  }
`;