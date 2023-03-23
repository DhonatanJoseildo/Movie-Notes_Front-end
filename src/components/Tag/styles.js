import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
  font-size: 12px;
  line-height: 14px;
  padding: 5px 14px;
  border-radius: 5px;
  margin-right: 6px;
  margin-top: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_03};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`;