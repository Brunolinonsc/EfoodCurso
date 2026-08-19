import { Imagem, Logo, Titulo } from './styles'
import bannerIMG from '../../assets/images/hero.png'
import logo from '../../assets/images/logo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerIMG})` }}>
    <div className="img">
      <img className="img" src={logo} alt="Logo" />
    </div>
    <div className="container">
      <Titulo>
        <div className="titulo1">Viva experiências gastronômicas</div>
        <div className="titulo2">no conforto da sua casa</div>
      </Titulo>
    </div>
  </Imagem>
)

export default Banner
