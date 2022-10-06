import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;

        *::-webkit-scrollbar {
            width: 22px;
            height: 22px;
            border-radius: 9999px;
        }

        *::-webkit-scrollbar-corner {
            background-color: transparent;
        }

        *::-webkit-scrollbar-thumb {
            width: 6px;
            background-color: transparent;
            border-radius: 80px;
            box-shadow: inset 0 0 0px 6px ${({ theme }) => theme.COLORS.BLUE};
            border: solid 10px transparent;
        }

        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        input[type=number] {
        -moz-appearance: textfield;
        }   
    }

    body, input, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    }

    button {
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;
