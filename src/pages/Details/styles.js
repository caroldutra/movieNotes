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
  max-width: 1000px;
  margin: 40px auto;

  .goBack {
    margin-bottom: 15px;
  }

  > .main {
    height: 500px;
    padding-right: 15px;
    overflow-y: auto;

    .title {
      display: flex;
      align-items: center;
      gap: 20px;
      margin: 30px 0;
    }

    .editions {
      display: flex;
      align-items: center;
      gap: 8px;

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
      }
    }

    .tags {
      margin: 40px 0;
      display: flex;
      gap: 8px;
    }

    .observation {
      text-align: justify;
      margin-bottom: 30px;
    }
  }
`;
