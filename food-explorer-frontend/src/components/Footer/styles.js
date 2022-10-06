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
        vertical-align: middle;
        align-content: center;
        margin: auto;

        color: ${({ theme }) => theme.COLORS.GRAY_200};

        padding: 0 4rem;

        > p {
            font-size: 1.4rem;
            font-family: 'DM Sans', sans-serif;
            text-align: right;
        }
`;

export const Logo = styled.div`
    .logo {
        display: flex;
        gap: 1.123rem;
        height: 77px;
        align-items: center;
        white-space: nowrap;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 2.51109rem;
        font-weight: 700;
        flex-wrap: wrap;
    }
`;