import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 53.0rem;

    > .buttons {
        display: flex;
        height: 81px;
    } 

    > .buttons button {
        width: 100%;
        background-color: transparent;
        color: white;
        border: 1px solid ${({ theme }) => theme.COLORS.BLUE_300};
        font-size: 1.6rem;
        line-height: 24px;
    }

    #active {
        background-color: red;
        color: blue;
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
`;

export const Content = styled.div`
    /* ==== Configs gerais do Card ==== */
    width: 100%;
    max-width: 53.0rem;
    max-height: 48rem;
    font-family: 'Roboto', sans-serif;

    padding: 59px clamp(30px, 30px + 5.5vw, 91px) 48px;
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_300};
    
    /* ==== Tela do Cartão de Crédito ==== */
    .validTo {
        display: flex;
        gap: 1.7rem;
        margin: 37px 0 37px;
    }

    .creditCard p {
        margin-bottom: 0.8rem;
    }

    /* ==== Tela do QR Code ==== */
    .qrCode {
        text-align: center;
    }

    .qr {
        margin: 0 37.9px;
    }

    .qrCode img {
        width: 100%;
        max-width: 27rem;
        margin-bottom: 2rem;
    }

    /* ==== Tela Pós Pagamento ==== */
    .clock,
    .approved,
    .delivered,
    .cart {
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .clock p,
    .approved p,
    .delivered p,
    .cart p {
        font-size: 2.4rem;
    }

    .clock p {
        margin: 0 44.15px;
    }

    /* ==== HIDE ==== */
    .hide {
        display: none;
    }
`;