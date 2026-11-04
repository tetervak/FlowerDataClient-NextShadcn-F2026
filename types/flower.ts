export interface FlowerPicture {
  id: number
  small: string
  large: string
}

export interface Flower {
  id: string
  label: string
  price: number
  description: string
  picture: FlowerPicture
  wiki: string
}
