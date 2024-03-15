import './details.scss'

interface Experience {
    year: number;
    description: string;
}
interface CVData {
    experience: Experience[];
    education: string[];
}

const cvData: CVData = {
    experience: [
        {
            year: 2020,
            description: "Lorem ipsum",
        },
        {
            year: 2022,
            description: "Lorem ipsum",
        }
    ],
    education: [
        "Lorem ipsum",
        "Dolor sit amet",
        "Technikum Elektroniczne",
    ]
}

const Details = () => (
    <>
        <section className='cv-details'>
            <h2>Experience</h2>
            <ul>
                {cvData.experience.map(experience => (
                    <li key={experience.year}>
                        <strong>{experience.year}</strong> - {experience.description}
                    </li>
                ))}
            </ul>
            <h2>Education</h2>
            <ul>
                {cvData.education.map((education, index) => (
                    <li key={index}>{education}</li>
                ))}
            </ul>
        </section>
    </>
);

export { Details }