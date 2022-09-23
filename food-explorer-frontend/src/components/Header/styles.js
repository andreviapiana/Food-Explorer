import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 10.4rem;
    width: 100%;
    gap: 3.2rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLUE};

    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

    padding: 2.8rem 12.3rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.BLUE};

    h1 {
        font-size: 2.51109rem;
    }

    .logo {
        display: flex;
        gap: 1.123rem;
    }
`;

export const Search = styled.div`
    grid-area: content;
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-size: 3.2rem;
    }
`;