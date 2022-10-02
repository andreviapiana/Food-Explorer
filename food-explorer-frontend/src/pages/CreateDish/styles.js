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
        padding: 3.2rem 0;
        height: auto;
    }

    
`;

export const Content = styled.div`
    max-width: 113.2rem;
    margin: auto;

    .buttons {
        display: flex;
        margin-top: 2.4rem;
        justify-content: flex-end;
    }
`;

export const Form = styled.form`
    max-width: 100%;

    > header {
        display: block;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 3.2rem;

        h1 {
            font-family: 'Poppins', sans-serif;
            font-size: 3.2rem;
            font-weight: 500;
            line-height: 4.5rem;
            margin: 2.4rem 0 3.2rem;
        }
    }

    > div p {
        margin-bottom: 0.8rem;
    }

    .dishImage {
        width: 22.9rem;
    }

    .dish {
        width: 85.9rem;
    }

    > .details {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3.2rem;
    }

    .ingredients {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        width: 83.7rem;
        gap: 2.4rem;
        height: auto;
        padding: 0.8rem;
        border-radius: 0.8rem;
        margin-bottom: 3.2rem;
        border: 1px solid white;
    }

    .ingredientsTag { 
        display: flex;
        justify-content: space-between;
    }

    .price {
        width: 25.1rem;
    }
`;