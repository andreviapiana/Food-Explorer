import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BLUE_300};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    border-radius: 0.8rem;
    padding: 0 1.6rem;

    svg {
        vertical-align: middle;
    }

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.BLUE};
    }

    > input {
        height: 3.2rem;
        max-width: 14rem;

        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
