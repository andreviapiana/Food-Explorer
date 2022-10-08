import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 320px;
    height: 100vh;
    overflow: auto;
    overflow: overlay; 
`;

export const Content = styled.div`

    width: 100%;
    max-width: 121.2rem;
    margin: auto;

    display: flex;
    flex-direction: column;
    padding: 35px 40px;

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
    margin-bottom: 62px;

    .banner {
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 8px;
        position: relative;
    }

    .title {
        padding: 1rem;
    }

    img {
        width: 100%;
        margin-bottom: -27px;
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
        margin-top: 16.4rem;
        position: relative;

        .banner {
            display: flex;
            justify-content: end;
        }
        
        .title {
            width: 540px;
            height: 26rem;
            text-align: right;

            padding: 87px 46px 0 0;
        }

        img {
            width: 656px;
            position: absolute;
            bottom: 13px;
            z-index: 1;
            left: -5rem;
        }

    }
`;
