import { Link } from 'react-router-dom';
import '../components/ButtonComponent.css'

export default function ButtonComponent({link, title}) {
  return (
    <>
        <button className="button-navbar"><Link to={link}>{title}</Link></button>
    </>
  );
}
