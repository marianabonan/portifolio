import styled from "styled-components";

export const Container = styled.div`
  background-color: #fafafa;
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin: 2%;
  }
`;

export const BoxDescription = styled.div`
  border: 1px solid #fcfcfc;
  border-radius: 40px;
  opacity: 1;
  @media (max-width: 525px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    .box-img {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
    .image {
      height: 200px;
      width: 200px;
      background-color: var(--purple-1);
      border-radius: 34px;
    }
    h4 {
    }
    span {
      color: ;
    }
  }
`;
