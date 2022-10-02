import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 17.2rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE}; 
    border-radius: 5px;
    resize: none;

    border-radius: 0.5rem;
    padding: 1.4rem;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;
