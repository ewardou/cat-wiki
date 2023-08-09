import catWikiLogo from '../assets/CatwikiLogo.svg';

export default function Logo() {
    return (
        <img
            src={catWikiLogo}
            alt="Cat wiki logo"
            className="h-[90px] w-auto transition-transform hover:scale-105 sm:mr-auto"
        />
    );
}
