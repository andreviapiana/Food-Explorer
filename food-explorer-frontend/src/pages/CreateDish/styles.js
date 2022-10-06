import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 320px;
    height: 100vh;   
    min-height: 100%;
    overflow: auto;
    overflow: overlay;    
`;

export const Content = styled.div`
    height: 100%;
    max-width: 1212px;
    width: 100%;
    margin: auto;
    
    .button {
        display: flex;
        margin: 2.4rem 0 2.4rem;
        justify-content: center;
    }

    @media only screen and (min-width: 768px) {
        .button {
            align-self: flex-end;
            justify-content: end;
            margin: 3.2rem  4rem;
        }
    }


`;

export const Form = styled.form`
    margin: 32px 40px 0;
    display: flex;
    flex-direction: column;
    gap: 32px;

    h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 4.5rem;
        text-align: center;
        
        margin: 2.4rem 0 0;
    }

    button:first-child {
        font-size: 2.4rem;
    }

    .header {
        justify-content: center;
        text-align: center;
    }

    > div p {
        margin-bottom: 0.8rem;
    }

    .details {
        display: flex;
        width: auto;
        gap: 3.2rem;
    }

    .dish {
        width: 50%;
    }

    .dishImage {
        width: 50%;
    }

    .ingredients {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        gap: 2.4rem;
        height: auto;
        padding: 0.8rem;
        border-radius: 0.8rem;
        margin-bottom: 3.2rem;
        border: 1px solid white;
    }

    .ingredientsTag { 
        justify-content: space-between;
    }

    .price {
        max-width: 150px;
    }

    @media only screen and (min-width: 768px) {

        h1 {
            text-align: left;
        }

        .dishImage {
            max-width: 22.9rem;
        }

        .dish {
            max-width: 85.9rem;
            width: 100%;
        }

        > .details {
            display: flex;
            justify-content: space-between;
        }

        .ingredients {
            height: 44px;
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            max-width: 83.7rem;
            width: 100%;
            height: auto;
            padding: 0.8rem;
            border-radius: 0.8rem;
            border: 1px solid white;
            margin-bottom: 0;
        }

        .ingredientsTag { 
            display: flex;
            justify-content: space-between;
            gap: 3.2rem;
        }

        .price {
            max-width: 25.1rem;
            width: 100%;
        }
    }
`;