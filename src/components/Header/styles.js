import styled from "styled-components";

export const Container = styled.div`
  grid-area: header;
  width: 100%;
  border-bottom: 1px solid #3e3b47;
  padding: 0 124px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 24px;
    font-weight: 700;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
      font-size: 14px;
      background: none;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;
