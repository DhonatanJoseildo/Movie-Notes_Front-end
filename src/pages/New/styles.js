import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main{
    grid-area: content;
    overflow-y: auto;

    section{
      max-width: 1420px;
      gap: 24px;
      margin: 40px 0;

      h2{
        color: ${({ theme }) => theme.COLORS.GRAY_02};
        font-size: 20px;
        line-height: 26px;
      }
    }
  }

  .tags{
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
    gap: 24px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    padding: 16px;
    border-radius: 8px;

    div{
      padding: 16px;
      margin: 0;
    }
  }
`;

export const Form = styled.form`
  max-width: 1440px;
  margin: 38px auto;
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

  > header {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 24px;
  }

  textarea{
    padding: 19px 16px;
    height: 274px;
    margin: 0;
  }
`;

export const TitleMovie = styled.div`
  display: flex;
  gap: 40px;
  margin: 40px 0;

  input{
    height: 55px;
  }
`;

export const ButtonControl = styled.div`
  display: flex;
  gap: 40px;

  button:first-child{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
    color: ${({ theme }) => theme.COLORS.PINK};
  }
  button:last-child{
    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    line-height: 21px;
  }
`;