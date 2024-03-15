import './header.scss'

interface CVData {
    name: string;
    lastName: string;
}

const cvData: CVData = {
    name: "Rafał",
    lastName: "Kuchta",
}

const Header = () => (
    <>
        <header className='cv-header'>
            <h1>CV {cvData.name} {cvData.lastName}</h1>
        </header>
    </>
);

export { Header }