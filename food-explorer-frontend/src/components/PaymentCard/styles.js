import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 53.0rem;

    > .buttons {
        display: flex;
        height: 8.1rem;
    } 

    > .buttons button {
        width: 100%;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
        border-bottom: none;
        font-size: 1.6rem;
        line-height: 2.4rem;
    }

    .buttons button.active {
        top: 2px;
        left: 1px;
        box-shadow: none;
        background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    } 

    > .buttons img {
        margin-right: 1.4rem;
        vertical-align: middle;
    }

    > .buttons button:first-child {
        border-radius: 0.8rem 0 0;
    }

    > .buttons button:last-child {
        border-radius: 0 0.8rem 0 0;
    }
`;

export const Content = styled.div`
    /* ==== Configs gerais do Card ==== */
    width: 100%;
    max-width: 53.0rem;
    max-height: 48rem;
    font-family: 'Roboto', sans-serif;

    padding: 5.9rem clamp(3rem, 3rem + 5.5vw, 9.1rem) 4.8rem;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 0 0 0.8rem 0.8rem;
    
    /* ==== Tela do Cartão de Crédito ==== */
    .validTo {
        display: flex;
        gap: 1.7rem;
        margin: 3.7rem 0 3.7rem;
    }

    .paymentCredit p {
        margin-bottom: 0.8rem;
    }

    /* ==== Tela do QR Code ==== */
    .paymentPix {
        text-align: center;
    }

    .qr {
        margin: 0 4rem;
    }

    .paymentPix img {
        width: 100%;
        max-width: 27rem;
        margin-bottom: 2rem;
    }

    /* ==== Tela Pós Pagamento ==== */
    .clock,
    .approved,
    .delivered,
    .cart {
        width: 100%;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    .clock p,
    .approved p,
    .delivered p,
    .cart p {
        font-size: 2.4rem;
        margin-top: 3rem;
    }

    /* ==== HIDE ==== */
    .hide {
        display: none;
    }
`;