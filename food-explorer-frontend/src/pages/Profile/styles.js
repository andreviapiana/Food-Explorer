import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    min-width: 32rem;
    height: 100vh;
    
    overflow: auto;
    overflow: overlay; 
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    max-width: 121.2rem;
    margin: auto;
    padding: 4rem;
    
    .card {
        -webkit-box-shadow: 0px 0px 10px 5px #193746; 
        box-shadow: 0px 0px 10px 5px #193746;
        border-radius: 1rem;
        margin-top: 4rem;
    }
    
    @media only screen and (min-width: 768px) {
        .card {
            display: flex;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    
    padding: 5rem;
    border-radius: 1rem 1rem 0 0;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE};
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    
    .inputs {
        display: flex;
        flex-direction: column;
        
        width: 100%;
        
        margin-bottom: 1.5rem;
        gap: 1rem;
        
        input {
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
            align-self: center;
            
            width: 100%;
            
            border-radius: 0.5rem;
            border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
            
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
        
        svg {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    @media only screen and (min-width: 768px) {
        border-radius: 1rem 0 0 1rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 3rem 3rem;
    
    > img {
        width: 18.6rem;
        height: 18.6rem;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
    }
    
    > label {
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: absolute;
        bottom: 0.7rem;
        right: 0.7rem;
        
        width: 4.8rem;
        height: 4.8rem;
        
        background-color: ${({ theme }) => theme.COLORS.BLUE_500};
        border-radius: 50%;
        border: 3px solid ${({ theme }) => theme.COLORS.BLUE};

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({ theme }) => theme.COLORS.BLUE};
        }
    }

    > label:hover {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 50px;
    
    border-radius: 0 0 1rem 1rem;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    p {
        font-size: 1.6rem;
        margin-bottom: 4rem;
    }

    span {
        font-weight: bold;
    }

    button {
        width: 100%;
        max-width: 30rem;
        height: 5.6rem;
        
        border: none;
        border-radius: 0.5rem;
        
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BLUE};
        
        margin-bottom: 3rem;
        gap: 1.2rem;
    }

    a {
        width: 100%;
        justify-content: center;
        display: flex;
    }

    @media only screen and (min-width: 768px) {
        width: 100%;
        border-radius: 0 1rem 1rem 0;
    }
`;

export const Logo = styled.div`
    margin-bottom: 3rem;

    .logo {
        display: flex;
        justify-content: center;
        
        width: 12rem;
        height: 12rem;
    }
`;