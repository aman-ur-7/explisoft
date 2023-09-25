import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        padding: 0px;
        margin: 0px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }

    .header{
        display: grid;
        align-items: center;
        grid-template-columns:3fr 3fr;
        padding: 10px 80px;

        .image{
            width: 140px;
        }

        .header-content{
            display: flex;
            align-items:  center;
            gap: 30px;
            font-size: large;
            color: #555555;

            &>div{
                display: flex;
                align-items: center;
                gap: 30px;
                cursor: pointer;

                :active{
                    color: #3498db;
                }
            }

            button{
                padding: 8px 20px;
                border-radius: 20px;
                font-size: large;
                background: #3498db;
                color: white;
                outline: none;
                border: none;
            }
        }
    }

        @media (min-width: 768px) {
        .header {
            grid-template-columns: 3fr 3fr; /* Display content in two columns */
            padding: 10px 80px; /* Increase padding for larger screens */

            .header-content {
                flex-direction: row; /* Display content in a row on larger screens */
            }
        }
    }

    .home-page{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 10px 80px;
    }

`;
