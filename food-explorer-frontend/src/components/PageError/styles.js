import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    max-width: 121.2rem;
    height: 100%;
    margin: auto;
    padding: 3.5rem 4rem;

    overflow: auto;
    overflow: overlay; 

    .header {
        flex-direction: row;
        justify-content: center;
        text-align: center;
        align-self: flex-start;
    }

    button:first-child {
        font-size: 2.4rem;
        font-weight: 500;
    }

    .content {
        align-items: center;
        text-align: center;
        margin-top: 6rem;
    }

    img{
        width: 30rem;
        height: 30rem;
    }
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        span{
            font-weight: 700;
            font-size: 5rem;
            color: ${({theme})=> theme.COLORS.BLUE}
        }
    }
`;