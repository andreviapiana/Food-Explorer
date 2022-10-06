import styled from 'styled-components'

export const Container = styled.div`
      width: 300px;
      height: 512px;
      background: rgba(0, 0, 0, 0.32);
      border: 1px solid rgba(0, 0, 0, 0.65);
      border-radius: 8px;
      position: relative;

      .btn-fav {
        position: absolute;
          top: 12px;
          right: 12px;
          background: transparent;
          border: none;
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 30px;
      }

      .container {
          padding: 38px 26px;
          display: grid;
          text-align: center;
          img {
          margin: 30px auto 16px;
          width: 176px;
          height: 176px;
      }

      .product-title {
          font-weight: 700;
          font-size: 24px;
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-family: 'Poppins', sans-serif;
          margin-bottom: 16px;
      }
      
      .description {
        font-weight: 400;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-bottom: 16px;
      }
      .price-title {
        color: ${({ theme }) => theme.COLORS.PRICE};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 32px;
        margin-bottom: 16px;
      }
      .content-includes {
        display: flex;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        align-items: center;
        justify-content: center;
        .btn {
          background: transparent;
          border: none;
          color: ${({ theme }) => theme.COLORS.WHITE};
          font-size: 20px;
          margin: 10px;
        }
        .count-item {
          border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
          padding: 1px 3px;
          border-radius: 2px;
        }
        button {
          max-width: 92px;
        }
    }
  }
`