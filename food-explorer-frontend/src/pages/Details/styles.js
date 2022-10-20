import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    min-width: 35rem;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    max-width: 121.2rem;
    height: 100%;
    margin: auto;
    padding: 3.5rem 4rem;

    .description {
        display: flex;
        flex-direction: column;
        align-items: center;   
    }

    .description h4 {
        margin: 2rem 0 2rem;
        font-size: 3.2rem;
        line-height: 5.12rem;
        color: ${({ theme }) => theme.COLORS.BLUE};
    }

    > button:nth-child(2) {
        font-size: 2.4rem;
        font-weight: 500;
    }

    .content {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        line-height: 4.75rem;
        margin-top: 1rem;
        text-align: center;

        h1 {
            font-size: 3rem;
            font-weight: 500;
            margin-bottom: 0.8rem;
        }

        h3 {
            max-width: 60rem;
            font-size: 1.8rem;
            font-weight: 400;
            line-height: 140%;
            margin-bottom: 2.6rem;
        }

        img {
            width: 22rem;
            height: 22rem;
        }
    }

    @media only screen and (min-width: 768px) {
        width: 100%;
        max-width: 121.2rem;
        margin: auto;
        padding: 3.5rem 4rem;

        .dish {
            display: flex;
            justify-content: space-between;
        }

        .description {
            align-items: flex-start;
            text-align: left;
            align-self: center;
        }

        .description h4 {
            margin: 0;
        }

        .price {
            display: flex;
            align-items: center;
            gap: 5.4rem;
            margin-top: 4.3rem;
        }

        .content {
            margin-top: 4.2rem;
            
            h1 {
                font-size: 4rem;
                font-weight: 500;
                margin-bottom: 0.8rem;
            }

            h3 {
                font-size: 2.4rem;
                font-weight: 400;
                line-height: 140%;
                margin-bottom: 2.6rem;
                max-width: 60rem;
            }

            img {
                width: clamp(5rem, 5rem + 30vw, 39rem);
                height: clamp(5rem, 5rem + 30vw, 39rem);
            }
        }
    }
`;