import './header.scss'
import { CVPersonal } from '../types.tsx'

type Props = {
  data: CVPersonal
}
const Header = ({ data: { name, lastName } }: Props) => (
  <>
    <header className="cv-header">
      <h1>
        CV {name} {lastName}
      </h1>
    </header>
  </>
)

export { Header }
