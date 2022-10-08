import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 51.2rem;
    align-items: center;
    margin-bottom: 6.2rem;
    `;

export const Content = styled.div`
    .swiper {
        width: 100%;
        height: 100%;
    }
    
    .swiper-slide {
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    
    .swiper-button-next,
    .swiper-button-prev {
        height: 509px;
        width: 90px;
        margin: -256px -10px;
        color: ${({ theme }) => theme.COLORS.BLUE};
        font-weight: bolder;
        mask-image: none;
        
    }

    .swiper-button-prev {
        background: linear-gradient(to left, transparent 0%, #000A0F 100% 0%, transparent 100%);
    }

    .swiper-button-next {
        background: linear-gradient(to right, transparent 0%, #000A0F 100% 0%, transparent 100%);
    }
`;








