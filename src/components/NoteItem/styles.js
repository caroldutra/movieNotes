import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  padding: 16px;
  border: ${({ isNew }) => (isNew ? "2px dashed" : "none")};
  border-color: ${({ isNew, theme }) =>
    isNew ? theme.COLORS.GRAY_100 : "none"};

  > input {
    margin-right: 8px;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    outline: none;
  }

  > button {
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
