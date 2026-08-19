import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  principal: '#FFF8F2',
  rodape: '#FFEBD9',
  fundoimagem: '#ffffff',
  texto: '#E66767',
  texto2: '#FFEBD9',
  botao: '#E66767'
}
export const GlobalCss = createGlobalStyle`
  * {
    justify-content: center;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    width: ;
  }
  body {
    background-color: ${cores.principal};
    color: ${cores.texto};
  }
`

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
`
