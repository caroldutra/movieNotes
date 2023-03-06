import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";
`;

export const Content = styled.div`
  grid-area: content;
  justify-self: center;
  width: 100%;
  max-width: 1100px;
  margin: 40px auto;

  .goBack {
    margin-bottom: 15px;
  }

  > .main {
    height: 500px;
    padding-right: 15px;
    overflow-y: auto;

    h2 {
      font-size: 36px;
      font-weight: 500;
      margin-top: 24px;
    }

    .input-wrapper {
      display: flex;
      gap: 40px;
      margin: 40px 0;
    }

    p {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin: 40px 0 24px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 40px;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 1100px;
  height: 274px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;
  padding: 20px 24px;
  resize: none;
  overflow-y: auto;
  outline: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  &::placeholder {
    font-size: 14px;
  }
`;
