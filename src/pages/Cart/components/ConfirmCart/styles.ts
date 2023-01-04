import styled from 'styled-components'

export const ConfirmCartContainer = styled.section`
  .title {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    margin-bottom: 0.93rem;
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`

export const CartArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 15.125rem;
  max-height: 999rem;
  width: 28rem;
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 6px 36px;
  padding: 0 1.5rem;
`

export const TotalArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5.125rem;
  height: 5.75rem;
  width: 23rem;

  .items {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 3rem;

    .minSize {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['gray-800']};
    }

    .maxSize {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors['gray-500']};
    }
  }

  .itemsValue {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 3rem;

    text-align: end;

    .minSize {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors['gray-800']};
    }

    .maxSize {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors['gray-500']};
    }
  }
`

export const ConfirmationButton = styled.button`
  height: 2.875rem;
  width: 23rem;

  border: none;
  border-radius: 8px;
  margin-bottom: 2.5rem;

  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors['yellow-200']};

  font-size: 0.875rem;
  font-weight: bold;

  transition: 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors['yellow-300']};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors['gray-800']};

    &:hover {
      cursor: not-allowed;
      filter: brightness(1);
    }
  }
`
