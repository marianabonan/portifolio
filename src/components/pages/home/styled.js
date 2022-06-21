import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    display: flex;
    flex-direction: column;
    color: var(--purple-1);
    line-height: 80px;
  }
  span {
    color: var(--grey-1);
  }
  p {
    margin-top: 25px;
  }

  @media (max-width: 785px) {
    h1 {
      font-size: 70px;
    }
    p {
      font-size: 18px;
      max-width: 480px;
    }
  }

  @media (min-width: 785px) {
    h1 {
      font-size: 85px;
    }
    p {
      width: 518px;
      height: 78px;
    }
  }
`;
