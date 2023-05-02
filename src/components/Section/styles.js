import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;
  display: flex;
  flex-direction: column;
  gap: 37px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > h2{
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    line-height: 42px;
    font-weight: 400;
  }

`;