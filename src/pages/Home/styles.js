import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;

  
`;

export const Search = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  

  section {
    display: grid;
    grid-template-areas: 
    'title button'
    'card card';
    justify-items: end;

    > div:first-child{
      grid-area: title;
      width: 100%;
    }

  }

  section > a{
    grid-area: button;
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
    border: none;
    text-decoration: none;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    max-width: 207px;
    padding: 13.5px;
    border-radius: 8px;

    font-size: 16px;
    line-height: 21px;

  }
`;

export const Cards = styled.div`
  grid-area: card;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: 75vh;
  padding-right: 8px;
  width: 100%;

  margin: auto;
  overflow-y: scroll;

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
`;