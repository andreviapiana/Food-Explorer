import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 7.7rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    align-items: center;
`;

export const Content = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        max-width: 121.2rem;
        padding: 0 4rem;
        margin: auto;

        color: ${({ theme }) => theme.COLORS.GRAY_300};

        > p {
            font-size: 1.4rem;
            font-family: 'DM Sans', sans-serif;
            text-align: right;
        }
`;

export const Logo = styled.div`
    .logo {
        display: flex;
        
        height: 7.7rem;
        gap: 1.123rem;

        align-items: center;
        white-space: nowrap;

        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 2.51109rem;
        font-weight: 700;
        flex-wrap: wrap;
    }
`;