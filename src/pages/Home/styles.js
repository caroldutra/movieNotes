import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: "header" "content";
`;

export const Content = styled.div`
  width: 100%;
  grid-area: content;
  max-width: 1130px;
  margin: 50px auto;

  > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: 32px;
      font-weight: 400;
    }
  }

  > .notes {
    display: flex;
    height: 450px;
    flex-direction: column;
    gap: 24px;
    margin-top: 30px;
    padding-right: 15px;
    overflow-y: auto;
  }
`;

export const AddMovie = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 14px 32px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;
