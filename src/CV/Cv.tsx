import { Header } from '../Header/Header.tsx'
import { Personal } from '../Presonal/Personal.tsx'
import { Details } from '../Details/Details.tsx'
import { CVData } from '../types.tsx'

const Cv = () => {
  const cvData: CVData = {
    personal: {
      photo: 'https://placehold.co/400x400?text=RK',
      name: 'Rafał',
      lastName: 'Kuchta',
      position: 'Developer',
    },
    details: {
      experience: [
        {
          year: 2020,
          description: 'Lorem ipsum',
        },
        {
          year: 2022,
          description: 'Lorem ipsum',
        },
      ],
      education: ['Lorem ipsum', 'Dolor sit amet', 'Technikum Elektroniczne'],
    },
  }

  return (
    <main className="cv-main">
      <Header data={cvData.personal} />
      <Personal data={cvData.personal} />
      <Details data={cvData.details} />
    </main>
  )
}

export { Cv }
