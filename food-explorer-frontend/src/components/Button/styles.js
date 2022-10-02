import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    height: 4.8rem;
    border: 0;
    padding: 1.2rem 3.3rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    width: 100%;

    &:disabled {
        opacity: 0.5;
    }
`;
