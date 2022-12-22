import styled from 'styled-components'

export const CartFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`

export const CartFormTitle = styled.h1`
  color: ${({ theme }) => theme.colors[`gray-700`]};
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  line-height: 130%;
`

export const FormAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  form {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1000px) {
      flex-direction: column;
    }
  }
`

export const FormAreaTitle = styled.div``

export const FormArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);

    .cep {
      grid-column: 1;
      max-width: 100%;
    }

    .street {
      grid-column: 1;
    }

    .complement {
      grid-column: 1;
    }
  }
`
