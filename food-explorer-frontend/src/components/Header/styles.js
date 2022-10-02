import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    justify-content: center;
`;

export const Content = styled.div`
    
    height: 10.4rem;
    width: 121.2rem;
    gap: 3.2rem;
    padding: 0 40px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;

    padding: 2.8rem auto;

    .nav-menu {
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 3.2rem;
    }

    .hamburger {
        display: none;
    }

    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
        background-color: ${({ theme }) => theme.COLORS.BLUE};
    }

    @media only screen and (max-width: 768px) {
        max-width: 768px;

        .nav-menu {
            position: fixed;
            left: -100%;
            top: 10.4rem;
            flex-direction: column;
            align-items: center;
            padding: 50px;
            background-color: ${({ theme }) => theme.COLORS.BLACK};
            border-top: 1px solid ${({ theme }) => theme.COLORS.BLUE};
            width: 100%;
            height: 35rem;
            border-radius: 0 0 2rem 2rem;
            text-align: center;
            transition: 0.3s;
            box-shadow:
                0 10px 27px rgba(0, 0, 0, 0.05);
        }

        .nav-menu.active {
            left: 0;
        }

        .nav-item {
            margin: 2.5rem 0;
        }

        .hamburger {
            display: block;
            cursor: pointer;
        }

        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }

        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
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

export const Button = styled.button`

    width: 100%;
    height: 5.6rem;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    &:disabled {
        opacity: 0.5;
    }
    @media (min-width: 768px) {
        max-width: 216px;
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-size: 3.2rem;
    }
`;