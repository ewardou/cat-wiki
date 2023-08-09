import { Link } from 'react-router-dom';
import arrowIcon from '../assets/arrow.svg';

export default function ReadMore({ path }: { path: string }) {
    return (
        <Link to={path}>
            <span className="text-lg font-medium transition-colors duration-300 hover:text-orange-300">
                Read more
            </span>{' '}
            <img src={arrowIcon} className="inline-block h-6 w-6" />
        </Link>
    );
}
