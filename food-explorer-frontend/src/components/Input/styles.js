import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    border-radius: 5px;

    > input {
        height: 48px;
        width: 100%;

        

        padding: 16px 14px;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
    
    > svg {
        margin-left: 14px;
    }
`;
