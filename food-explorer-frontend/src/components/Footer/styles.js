import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 7.7rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    align-items: center;
`;

export const Content = styled.div`
        max-width: 121.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;

        color: ${({ theme }) => theme.COLORS.GRAY_200};

        padding: 2.35rem 4rem;

        > p {
            font-size: 1.4rem;
            font-family: 'DM Sans', sans-serif;
        }
`;

export const Logo = styled.div`
    .logo {
        display: flex;
        gap: 1.123rem;
        height: 30px;
        align-items: center;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 2.51109rem;
        font-weight: 700;
        flex-wrap: wrap;
    }
`;