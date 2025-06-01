class RestaurantIndividual {
  id: number
  image: string
  name: string
  classification: number
  description: string
  popular: boolean
  tag: string
  link: string

  constructor(
    id: number,
    image: string,
    name: string,
    classification: number,
    description: string,
    popular: boolean,
    tag: string,
    link: string
  ) {
    this.id = id
    this.image = image
    this.name = name
    this.classification = classification
    this.description = description
    this.popular = popular
    this.tag = tag
    this.link = link
  }
}

export default RestaurantIndividual
