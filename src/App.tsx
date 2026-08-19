import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Banner from './Components/Banner/Index'
import Product from './Components/Products/Index'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Banner />
      <Product
        title={''}
        category={''}
        system={''}
        description={''}
        infos={[]}
        image={''}
      />
    </BrowserRouter>
  )
}

export default App
