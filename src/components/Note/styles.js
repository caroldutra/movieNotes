import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  padding: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

  > h3 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin: 15px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  > footer {
    display: flex;
    gap: 8px;

    div {
      background-color: ${({ theme }) => theme.COLORS.GRAY_300};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
