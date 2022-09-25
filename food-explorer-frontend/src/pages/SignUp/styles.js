import styled from "styled-components";

export const Container = styled.div`
    max-width: 110.6rem;
    margin: auto;
    height: 100vh;
    padding: 14.2rem 0;
    justify-content: space-between;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    width: 47.6rem;
    height: 60rem;
    padding: 6.4rem;
    border-radius: 1.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background-color: ${({ theme }) => theme.COLORS.BLUE_200};

    > h1 {
        font-size: 4.8rem;
        color: ${({ theme }) => theme.COLORS.BLUE};
    }

    > h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 6.8rem;

        text-align: center;
        margin-bottom: 3.2rem;
    }

    > a {
        margin-top: 3.2rem;
        color: ${({ theme }) => theme.COLORS.BLUE};
        text-align: center;
    }

    > .inputs {
        margin-bottom: 3.2rem;
    }

    > .inputs p {
        font-size: 1.6rem;
        margin-bottom: 0.8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.BLUE};

    h1 {
        font-size: 4.248rem;
    }

    .logo {
        display: flex;
        gap: 1.9rem;
    }

    svg {
        height: 50px;
        width: 60px;
    }
`;