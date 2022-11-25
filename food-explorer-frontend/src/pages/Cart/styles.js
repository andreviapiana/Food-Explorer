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
        /* ==== General card settings ==== */

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
        
        /* ==== CreditCard Screen ==== */
        .validTo {
            display: flex;
            gap: 1.7rem;
            margin: 3.7rem 0 3.7rem;
        }

        .paymentCredit p {
            margin-bottom: 0.8rem;
        }

        /* ==== QR Code Screen ==== */
        .paymentPix {
            text-align: center;
        }

        .qr {
            text-align: center;
        }

        #paymentPix img {
            width: clamp(5rem, 5rem + 20vw, 27rem);
            height: clamp(5rem, 5rem + 20vw, 27rem);

            margin-bottom: 2rem;
        }

        /* ==== Post Payment Screen ==== */
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

    /* ==== Smooth Transitions ==== */
    .cart,
    .clock,
    .approved,
    .paymentCredit,
    #paymentPix {
	    -webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    @-webkit-keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
        }
        @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;