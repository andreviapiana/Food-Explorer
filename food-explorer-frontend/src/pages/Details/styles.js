import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    min-width: 350px;
`;

export const Content = styled.div`
    height: 100%;
    margin: 0 40px;
    padding: 2.5rem 0;

    text-align: center;

    .description {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .description h4 {
        margin: 20px 0 20px;
        font-size: 32px;
        line-height: 51.2px;
        color: ${({ theme }) => theme.COLORS.BLUE};
    }

    > button:first-child {
        font-size: 2.4rem;
    }

    .content {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        line-height: 4.75rem;
        margin-top: 1rem;

        h1 {
            font-size: 3rem;
            font-weight: 500;
            margin-bottom: 0.8rem;
        }

        h3 {
            font-size: 1.8rem;
            font-weight: 400;
            margin-bottom: 2.6rem;
            max-width: 60rem;
            line-height: 140%;
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
        padding: 2.5rem 4rem;

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
            margin-top: 43px;
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
                margin-bottom: 2.6rem;
                max-width: 60rem;
                line-height: 140%;
            }

            img {
                width: clamp(5rem, 5rem + 30vw, 39rem);
                height: clamp(5rem, 5rem + 30vw, 39rem);
            }
        }
    }
`;