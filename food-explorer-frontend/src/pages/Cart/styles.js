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

    > .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    > .content h2 {
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
        justify-content: space-between;

        > .content {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            align-items: flex-start;
        }

        > .content {
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
        }

    }
`;