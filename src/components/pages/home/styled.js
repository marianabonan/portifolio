import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;

  h1 {
    display: flex;
    flex-direction: column;
    color: var(--purple-1);
  }

  span {
    color: var(--grey-1);
  }

  @media (max-width: 655px) {
    height: 550px;
    h1 {
      font-size: 70px;
      margin: 5%;
      line-height: 80px;
    }
    p {
      font-size: 22px;
      margin-left: 5%;
      width: 300px;
      max-width: 420px;
    }
  }
  @media (min-width: 655px) {
    height: 550px;
    h1 {
      font-size: 70px;
      margin: 5%;
      line-height: 80px;
    }
    p {
      padding: none;

      margin-left: 5%;
      width: 500px;
      font-size: 25px;
    }
  }

  @media (min-width: 785px) {
    height: 600px;
    h1 {
      margin: 0px;
      font-size: 85px;
      margin-top: 65px;
      padding-left: 5%;
      line-height: 80px;
    }
    p {
      margin: 0px;
      width: 518px;
      height: 78px;
      padding-left: 5%;
      padding-top: 15px;
    }
  }
  @media (min-width: 985px) {
    height: 650px;
    h1 {
      margin-top: 100px;
      font-size: 95px;
      line-height: 95px;
    }
    p {
      font-size: 35px;
      width: 820px;
      height: 78px;
      padding-top: 15px;
    }
  }
`;
