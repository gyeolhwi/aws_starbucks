import { css } from "@emotion/react";

export const reset = css`
    html,body,#root{
        margin: 0;
        padding: 0;
        height: 100%;
        background-color: #d2b48c;
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
        color: #000000;
        cursor: pointer;
    }

    button{
      
    }
    input[type="text"],
    input[type="password"]{
    }
`;