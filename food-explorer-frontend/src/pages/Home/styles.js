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
    padding: 3.5rem 4rem;

    font-family: 'Poppins', sans-serif;

    p {
        font-size: 3.2rem;
        margin-bottom: 4rem;
    }
`;

export const Banner = styled.div`
    text-align: center;
    justify-content: space-between;
    font-family: 'Poppins', sans-serif;

    margin-bottom: 6.2rem;

    .banner {
        background: linear-gradient(180deg, ${({ theme }) => theme.COLORS.BLUE_400} 0%, ${({ theme }) => theme.COLORS.BLUE_500} 100%);
        border-radius: 0.8rem;
        position: relative;
        -webkit-box-shadow: 0px 0px 10px 5px #193746; 
        box-shadow: 0px 0px 10px 5px #193746;
    }

    .title {
        padding: 1rem;
    }

    img {
        width: 100%;
        margin-bottom: -2.7rem;
        z-index: -1;
    }

    h1 {
        line-height: 140%;
        font-size: clamp(1rem, 6vw, 4rem);
        font-weight: 500;

        margin-bottom: 0.8rem;
    }

    span {
        font-size: clamp(1rem, 2.5vw, 1.6rem);
    }

    @media only screen and (min-width: 1060px) {
        position: relative;
        margin-top: 16.4rem;

        .banner {
            display: flex;
            justify-content: end;
        }
        
        .title {
            width: 54rem;
            height: 26rem;

            padding: 8.7rem 4.6rem 0 0;

            text-align: right;
        }

        img {
            width: 65.6rem;
            position: absolute;
            bottom: 1.3rem;
            z-index: 1;
            left: -5rem;
        }
    }
`;
