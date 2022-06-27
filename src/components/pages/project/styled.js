import styled from "styled-components";

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 200px;
  h3 {
    font-size: 40px;
    font-weight: bold;
    color: #9974e5;
    padding-bottom: 15px;
  }
  p {
    font-size: 20px;
  }
  @media (min-width: 2000px) {
    h3 {
      font-size: 50px;
    }
    p {
      font-size: 35px;
    }
  }
`;
export const BoxProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const CardProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #fcfcfc;
  text-align: left;
  margin-top: 20px;
  border-radius: 40px;
  img {
    padding: 15px;
    border-radius: 40px;
    height: 200px;
  }
  div {
    display: flex;
  }
  p {
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 30px;
    color: #4a00e0;
    font-size: 24px;
    font-weight: bold;
  }
  span {
    padding: 15px;
    color: #cbcbcb;
    font-size: 15px;
  }

  @media (min-width: 550px) {
    width: 400px;
    text-align: center;
    align-items: center;

    img {
      height: 300px;
    }
  }

  @media (min-width: 1700px) {
    width: 500px;
    height: 550px;

    span {
      font-size: 22px;
    }
    img {
      height: 400px;
    }
  }

  @media (min-width: 2000px) {
    width: 600px;
    height: 600px;

    img {
      height: 450px;
    }
  }
`;
