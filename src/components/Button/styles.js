import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 16px 0;
  font-weight: 500;
  border-radius: 10px;
  display: flex;
  gap: 8px;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;
