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
    height: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;
    padding: 35px 40px;

    > h1 {
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
    }
    > div {
        font-size: 2rem;
        font-weight: 500;

        display: flex;
        align-items: center;
        gap: 4.1rem;
        justify-content: center;

    }

    @media only screen and (min-width: 768px) {
        height: 100%;
    }
`;


export const Table = styled.div`
    .table {
        max-width: 68.8rem;
        height: 38.7rem;
        border: 2px solid ${({ theme }) => theme.COLORS.BLUE_300};
        border-radius: 0.8rem;

        overflow: auto;
        overflow: overlay;
  
        margin-top: 3.5rem;
    } 

    table {
        border-collapse: collapse;
        word-break: break-word;
    }

    table * {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    table th {
        text-align: left;
        font-weight: bold;
        padding: 2.1rem 2.4rem;
        height: 6.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLUE_300};
    }

    table th:first-child {
        width: 22.3rem;
    }

    table th:nth-child(2) {
        width: 15.1rem;
    }

    table th:nth-child(3) {
        width: 60.5rem;
    }

    table th:last-child {
        width: 15.1rem;
    }

    table tr {
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLUE_300};
    }

    table tr:last-child {
        border-bottom: none;
    }

    table td {
        padding: 1.6rem 2.4rem;
        font-weight: 400;
        height: 8rem;
    }

    table th:nth-child(-n+3),
    table td:nth-child(-n+3) {
    border-right: 2px solid ${({ theme }) => theme.COLORS.BLUE_300};
    }

    select {
        max-width: 17.5rem;
        background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

        border-radius: 0.8rem;
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};

        padding: 1.3rem 1.6rem;
    }

    @media only screen and (min-width: 768px) {
        .table {
        max-width: 121.2rem;
        }
        
        select {
            width: 17.5rem;
        }
    }
`;