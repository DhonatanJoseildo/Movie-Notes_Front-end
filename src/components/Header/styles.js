import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  
  width: 100%;
  z-index: 10;
  
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_BORDER};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  
  
  `;

export const Content = styled.div`
  max-width: 1440px;
  height: 116px;

  margin: auto;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
`;


export const Brand = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  > h1{
    text-align: center;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  
  > a{
    display: flex;
    text-decoration: none;
    
    > img{
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
  }

  > div{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 24px;
    
    > a {
      font-size: 14px;
      text-decoration: none;
      line-height: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
export const Logout = styled.button`
  font-size: 14px;
  line-height: 18px;
  text-decoration: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.GRAY_01};
`;