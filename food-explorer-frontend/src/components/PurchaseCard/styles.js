import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    
    .counter {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        margin: 0 2.4rem 0 0;
    }

    .counter span {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    p {
        font-size: 3.2rem;
        font-weight: 700;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.BLUE};
        text-align: center;
    }
`;