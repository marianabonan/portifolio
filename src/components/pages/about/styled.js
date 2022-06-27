import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;

  @media (max-width: 970px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
  }
  @media (min-width: 970px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 2%;
    justify-content: space-around;
    padding-top: 150px;
  }
`;

export const BoxDescription = styled.div`
  padding-top: 20px;
  border: 2px solid #fcfcfc;
  border-radius: 40px;
  opacity: 1;
  background-color: #fcfcfc;

  p {
    text-align: center;
  }
  h3 {
    font-weight: bold;
  }

  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 420px;
    margin-bottom: 25px;

    .box-img {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      margin-bottom: 15px;
    }
    .image {
      height: 200px;
      width: 200px;
      border-radius: 34px;
    }
    h3 {
      font-size: 35px;
      color: #4a00e0;
    }
    p {
      margin-bottom: 15px;
      padding: 10px;
      font-size: 22px;
    }
  }

  @media (min-width: 580px) {
    max-width: 580px;
    margin-bottom: 25px;

    .box-img {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      text-align: center;
      align-items: center;

      margin-bottom: 15px;
    }
    .image {
      height: 200px;
      width: 200px;
      background-color: var(--purple-1);
      border-radius: 34px;
    }
    h3 {
      color: #4a00e0;
      font-size: 30px;
      max-width: 300px;
    }
    p {
      margin-bottom: 15px;
      padding: 20px;
    }
  }
  @media (min-width: 1830px) {
    max-width: 880px;
    .image {
      height: 300px;
      width: 300px;
    }
    h3 {
      font-size: 55px;
    }
    p {
      font-size: 35px;
    }
  }
`;

export const BoxAside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 675px) {
    margin-top: 2%;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    height: 400px;
  }

  @media (min-width: 970px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2%;
    justify-content: space-around;
    height: 500px;
  }
  @media (min-width: 1830px) {
    height: 700px;
  }
`;

export const BoxSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #fcfcfc;
  opacity: 1;
  display: flex;
  justify-content: space-around;
  background-color: #fcfcfc;
  border-radius: 40px;
  height: 200px;
  align-items: center;
  padding: 20px;
  width: 294px;
  margin-bottom: 25px;
  .icons {
    font-size: 65px;
    color: #9974e5;
    margin-left: 10px;
  }
  @media (min-width: 675px) {
    margin-bottom: 0;
    margin-right: 25px;
  }
  @media (min-width: 1255px) {
    width: 544px;
    .icons {
      font-size: 80px;
      margin-left: 20px;
    }
  }
  @media (min-width: 1830px) {
    width: 644px;
    .icons {
      font-size: 100px;
    }
  }
`;

export const BoxLinks = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fcfcfc;
  border-radius: 40px;
  border: 2px solid #fcfcfc;
  height: 200px;
  padding: 20px;
  justify-content: space-between;
  button {
    border: none;
  }
  button :hover {
    cursor: pointer;
  }
  .boxLink {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 250px;
    align-items: center;
  }
  .iconLink {
    font-size: 60px;
    color: #4a00e0;
  }
  p {
    text-align: center;
  }
  @media (max-width: 855px) {
    min-width: 200px;
    max-width: 580px;
  }
  @media (min-width: 1255px) {
    flex-direction: row;

    .iconLink {
      font-size: 80px;
    }
  }
  @media (min-width: 1830px) {
    width: 644px;
    .iconLink {
      font-size: 100px;
    }
    .boxLink {
      margin-left: 20px;
    }
    p {
      font-size: 35px;
    }
  }
`;
