import styled from "styled-components";

export const Container = styled.button`
    background: none;
    color: ${({ theme }) => theme.COLORS.BLUE};

    border: none;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    
    display: flex;
    align-items: center;
    text-align: end;
    gap: 8px;
`;