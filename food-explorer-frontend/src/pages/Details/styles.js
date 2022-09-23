import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.4rem auto;
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
        overflow: auto;
        overflow: overlay;
        padding: 2.4rem 0;
        height: auto;
    }
`;

export const Content = styled.div`
    max-width: 136.8rem;
    margin: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > button:first-child {
        align-self: start;
        font-size: 2.4rem;
        align-items: center;
        text-align: center;
    }

    > div {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        line-height: 4.75rem;
        font-weight: 500;

        display: flex;
        align-items: center;
        gap: 4.1rem;
        margin-top: 4.2rem;

        h1 {
            font-size: 4rem;
            font-weight: 500;
            margin-bottom: 0.8rem;
        }

        h3 {
            font-size: 2.4rem;
            font-weight: 400;
            margin-bottom: 2.6rem;
            max-width: 60rem;
            line-height: 140%;
        }

        img {
            width: 39rem;
            height: 39rem;
        }

        span {
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
        }
    }

    > p {
        font-size: 16px;
        font-weight: 400;
        line-height: 21px;
        text-align: justify;
        margin-top: 40px;
    }
`;