import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
`;

export const Content = styled.div`
    position: relative;

    width: 30rem;
    height: 51.2rem;
    border-radius: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.65);
    
    background: rgba(0, 0, 0, 0.32);

    .favButton {
        position: absolute;
        top: 1.2rem;
        right: 1.2rem;
        background: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 3rem;
    }

    .favButton svg {
        fill: ${({ theme }) => theme.COLORS.BLUE};
    }

    .container {
        display: grid;
        padding: 3.8rem 2.6rem;
        text-align: center;
        align-items: center;

        > img {
            width: 17.6rem;
            height: 17.6rem;
            margin: 3rem auto 1.6rem;
            border-radius: 50%;
            object-fit: cover
        }
    }

    .product-title {
        font-weight: 700;
        font-size: 2.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        
        margin-bottom: 1.8rem;
        white-space: nowrap;
    }
    
    .description {
        font-family: 'Roboto', sans-serif;
        font-size: 1.4rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        margin-bottom: 1.6rem;
        height: 3.4rem;
    }

    .price {
        font-family: 'Roboto', sans-serif;
        font-size: 3.2rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.BLUE};

        margin-bottom: 1.6rem;
    }
`;

export const PurchaseCard = styled.div`
    display: flex;

    button {
        height: 5.6rem;
        max-width: 24.6rem;
        white-space: nowrap;
    }
    
    .counter {
        display: flex;
        align-items: center;
        gap: 1.4rem;
        margin: 0 2.4rem 0 0;
    }

    .counter span {
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    p {
        font-weight: 700;
        line-height: 160%;
        color: ${({ theme }) => theme.COLORS.BLUE};
        text-align: center;
    }
`;