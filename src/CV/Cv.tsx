import {Header} from "../Header/Header.tsx";
import {Personal} from "../Presonal/Personal.tsx";
import {Details} from "../Details/Details.tsx";

const Cv = () => {
    return (
        <main className='cv-main'>
            <Header />
            <Personal />
            <Details />
        </main>
    )
}

export { Cv }