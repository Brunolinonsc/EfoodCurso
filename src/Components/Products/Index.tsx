import Tag from '../Tag'

type Props = {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
}

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image
}: Props) => {
  return (
    <article>
      <img src={image} alt={title} />
      <div>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </div>
      <h3>{title}</h3>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>

      <p>{description}</p>
    </article>
  )
}
export default Product
