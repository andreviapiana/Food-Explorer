import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    
    width: 40rem;
    max-height: 48rem;

    font-family: 'Poppins', sans-serif;
    font-size: 2rem;

    > .card {
        display: flex;
        align-self: flex-start;
        align-items: center;
        
        height: 10.4rem;
        gap: 1.4rem;
        overflow: auto;
    }

    > .card strong {
            margin-right: 1.2rem;
        }

    > .card span {
            margin-left: 1.2rem;
            font-size: 1.2rem;
            font-weight: 400;
        }

    img {
        width: 7.2rem;
        height: 7.2rem;
    }
`;