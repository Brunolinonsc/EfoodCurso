import Product from '../Product'

import { Container, List } from './styles'

// Local Game type definition (was missing)
export type Game = {
  id: string | number
  category: string
  description: string
  image: string
  infos?: string
  system?: string
  title: string
}

export type Props = {
  title: string
  background: 'gray' | 'black'
  games: Game[]
}
const ProductList = ({ title, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            infos={game.infos}
            system={game.system}
            title={game.title}
          />
        ))}
      </List>
    </div>
  </Container>
)
export default ProductList
