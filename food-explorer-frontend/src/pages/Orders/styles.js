import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    min-width: 320px;
    min-height: 100%;
    
    overflow: auto;
    overflow: overlay;  

    footer {
        position: absolute;
        bottom: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    max-width: 121.2rem;
    margin: auto;
    padding: 3.5rem 4rem;

    .zeroOrders {
        justify-content: center;
        align-items: center;
        padding: 10rem;
        white-space: normal;
    }

    .zeroOrders p {
        text-align: center;
        font-weight: bold;
        font-size: 3rem;
    }
`;

export const Table = styled.div`
    table {
        display: block;
        overflow: auto;
        overflow: overlay;
        white-space: nowrap;
        
        width: 100%;
        max-height: 54.4rem;
        margin-top: 3.5rem;
        
        border: 2px solid ${({ theme }) => theme.COLORS.BLUE_300};
        border-radius: 0.8rem;
        border-collapse: collapse;

        -webkit-box-shadow: 0px 0px 10px 5px #193746; 
        box-shadow: 0px 0px 10px 5px #193746;
    }

    table * {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    table th {
        position: sticky;
        top: 0px;

        height: 6.4rem;
        padding: 2.1rem 2.4rem;
        border-bottom: 2px solid ${({ theme }) => theme.COLORS.BLUE_300};
        
        text-align: left;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        background: ${({ theme }) => theme.COLORS.BLUE_200};
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

    table tr:nth-child(even) {
        background: ${({ theme }) => theme.COLORS.BLUE_200};
    }

    table tr:last-child {
        border-bottom: none;
    }

    table td {
        height: 8rem;
        padding: 1.6rem 2.4rem;
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
`;