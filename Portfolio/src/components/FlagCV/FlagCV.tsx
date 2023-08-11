import { Link } from 'react-router-dom';
import f from './FlagCV.module.css';

type Props = {
    text: string,
    flag: string,
    link: string
}

const FlagCV: React.FC<Props> = ({ text, flag, link }) => {

    return <Link
        className={f.flagButton}
        to={link}
        target='_blank'
    >
        <img src={flag} alt="-" className={f.image} />
        <h5 className={f.txt}>{text}</h5>
    </Link>

}

export default FlagCV;