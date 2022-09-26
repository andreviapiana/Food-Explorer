import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    justify-content: center;
    position: relative;
    align-self: flex-end;

    > main {
        height: 7.7rem;
        width: 113.2rem;
        gap: 3.2rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
        white-space: nowrap;

        padding: 2.8rem auto;

        > p {
            font-size: 1.4rem;
            font-family: 'DM Sans', sans-serif;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    h1 {
        font-size: 2.51109rem;
    }

    .logo {
        display: flex;
        gap: 1.123rem;
    }

    svg path {
        fill: green;
        color: red;
        background-color: red;
    }
`;