import { Link } from 'react-router-dom'
import '../styles/index.css'

const Home = ({ title }) => {
    return (
        <>
            <div className='container' >{title}</div>
            <Link to='/product' >product</Link>
        </>
    )
}
export default Home