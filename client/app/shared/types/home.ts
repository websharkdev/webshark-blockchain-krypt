export interface Image {
  src: string
  alt: string
  size?: 'xl' | 'lg' | 'md' | 'xs'
}

export interface HomeSwiperItem {
  id: number
  image: Image
}

export interface CardFormProps {
  address: string
  amount: string
  message: string
  keyword: string
}
