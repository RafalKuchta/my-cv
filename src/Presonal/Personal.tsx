import './personal.scss'
import { CVPersonal } from '../types.tsx'

type Props = {
  data: CVPersonal
}

const Personal = ({ data: { name, lastName, position, photo } }: Props) => (
  <>
    <aside className="cv-personal">
      <h2>Personal data</h2>
      <img
        className="cv-photo"
        src={photo}
        alt={`${name} ${lastName} profile photo`}
      />
      <p>
        {name} {lastName}
      </p>
      <small>{position}</small>
    </aside>
  </>
)

export { Personal }
