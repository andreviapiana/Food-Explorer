import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    
    width: 100%;
    
    position: sticky;
    top: 0;
    z-index: 999;
    
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    -webkit-box-shadow: 0px 0px 10px 5px #193746; 
    box-shadow: 0px 0px 10px 5px #193746;

    // ================= KEYFRAMES ================= //
    @keyframes scale-up-center {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.2);
        }
    }

    @keyframes rotate-center {
    0% {
        -webkit-transform: rotate(0);
                transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
    }}
    
    @keyframes tracking-in-expand {
    0% {
        letter-spacing: -0.5em;
        opacity: 0;
    }
    40% {
        opacity: 0.6;
    }
    100% {
        opacity: 1;
    }}
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    
    width: 121.2rem;
    height: 10.4rem;
    
    padding: 0 4rem;
    gap: 3.2rem;

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
            flex-direction: column;
            align-items: center;
            text-align: center;
            
            position: fixed;
            left: -100%;
            top: 10.4rem;
            z-index: 9999;
            
            width: 100%;
            height: 44rem;
            padding: 5rem;
            border-radius: 0 0 2rem 2rem;
            border-top: 1px solid ${({ theme }) => theme.COLORS.BLUE};
            
            transition: 0.3s;
            
            background-color: ${({ theme }) => theme.COLORS.BLACK};
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
        animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    }
    
    .logo {
        display: flex;
        gap: 1.123rem;
        
    }

    .logo img:hover {
        -webkit-animation: rotate-center 0.6s ease-in-out both;
        animation: rotate-center 0.6s ease-in-out both;
    }
`;

export const Search = styled.div`
    align-self: center;

    width: 100%;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    input {
        width: 100%;
        height: 4.8rem;

        padding: 1.6rem;
        border: 0;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
        background: transparent;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    label {
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 1.6rem;
    } 

    svg {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 5.6rem;
    
    border: none;
    border-radius: 0.5rem;
    
    gap: 1.1rem;
    
    font-size: 1.4rem;

    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (min-width: 768px) {
        max-width: 21.6rem;
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

	> svg:hover {
	    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
        
    > svg {
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-size: 3.2rem;
    }
`;

export const Profile = styled.button`
    border: none;
    background: none;

	> svg:hover {
	    animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
        
    > svg {
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-size: 3.2rem;
    }
`;