import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Montserrat', sans-serif;

}

:root {
    --white:#FFFFFF;
    --grey-0: #0000004D;
    --grey-1: #707070;
    --grey-2: #EDEDED;
    --grey-3: #FAFAFA;
    --grey-4: #FCFCFC;
    --purple-0: #1C0055;
    --purple-1: #4A00E0;
    --purple-2: #8E2DE2;
    --purple-3: #9974E5;
    --purple-4: #B783E5;
}

p{
    font-size: 25px;
    color: var(--grey-1);
}

h2{
    font-size: 60px ;
}


button:hover{
      cursor: pointer;
  }
`;
