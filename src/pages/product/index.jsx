import '../../styles/index.css'
import { Link, useNavigate } from 'react-router-dom'
const Product = props => {

    const navigate = useNavigate();
    const handleRedirect = () => {

        navigate("/login?back=", "product/saddsadssadsad")
    }

    return (
        <>
            <div className='container'>Product</div>
            <Link to='/' >Home</Link>
            <div onClick={handleRedirect}>redirect</div>
        </>
    )
}
export default Product