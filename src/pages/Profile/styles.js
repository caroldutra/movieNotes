import styled from "styled-components";

export const Container = styled.div`
  header {
    width: 100%;
    height: 144px;
    display: flex;
    align-items: center;
    padding-left: 144px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div:nth-child(3),
  div:nth-child(5) {
    margin-bottom: 8px;
  }
`;

export const Avatar = styled.div`
  width: 186px;
  height: 186px;
  position: relative;
  margin: -90px auto 64px;

  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 7px;
    right: 7px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }

  > input {
    display: none;
  }
`;
