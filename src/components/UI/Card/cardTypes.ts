export interface CardProps {
  description: {
    text: string
    href?: string
  }
  title: {
    text: string
    href?: string
  }
  img: {
    src: string
    href?: string
  }
  colorSchema?: string
  avatar: string
}
