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
    
    overflow: auto;
    overflow: overlay;

    > .card-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    > .card-wrapper h2 {
        font-weight: 500;
        font-size: 3.2rem;
        font-family: 'Poppins', sans-serif;
        margin-bottom: 3.2rem;
        justify-content: center;
    }

    .total {
        margin: 20px auto 60px;
        line-height: 64px;
        font-size: 2rem;
        width: 180px;
        height: 64px;
        border-radius: 10px;

        border: 1px solid white;
        background-color: ${({ theme }) => theme.COLORS.BLUE_300};
    }

    @media only screen and (min-width: 768px) {
        max-width: 121.2rem;
        height: 100%;

        > .card-wrapper {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            align-items: flex-start;
        }

        > .card-wrapper {
            flex-direction: row;
        }

        .details {
            max-height: 520px;
            overflow: auto;
            overflow: overlay;
        }

        .total {
            margin: 0;
            text-align: center;
            white-space: nowrap;
        }

    }
`;

export const PaymentCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 53.0rem;

    .paymentHeader {
        .buttons {
            display: flex;
            height: 8.1rem;
        } 
    
        .buttons button {
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
    
        .buttons img {
            margin-right: 1.4rem;
            vertical-align: middle;
        }
    
        .buttons button:first-child {
            border-radius: 0.8rem 0 0;
        }
    
        .buttons button:last-child {
            border-radius: 0 0.8rem 0 0;
        }
    }

    .paymentBody {
        /* ==== Configs gerais do Card ==== */

        width: 100%;
        max-width: 53.0rem;
        max-height: 48rem;
        font-family: 'Roboto', sans-serif;

        padding: 5.9rem clamp(3rem, 3rem + 5.5vw, 9.1rem) 4.8rem;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
        border-radius: 0 0 0.8rem 0.8rem;

        justify-content: center;
        align-self: center;
        align-items: center;
        align-content: center;
        
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
        .cart {
            width: 100%;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        > .clock p,
        .approved p,
        .cart p {
            font-size: 2.4rem;
            margin-top: 3rem;
        }
    }
`;