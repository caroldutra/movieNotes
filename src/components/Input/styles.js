import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 630px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 12px;

  > input {
    width: 100%;
    background-color: transparent;
    outline: 0;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      font-size: 14px;
    }
  }
`;
