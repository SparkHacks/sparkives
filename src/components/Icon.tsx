import { icons, type IconName } from "../assets/svgBank"

type Props = {
  name: IconName
  className?: string
}

export function Icon({ name, className }: Props) {
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: icons[name] }}
    />
  )
}
