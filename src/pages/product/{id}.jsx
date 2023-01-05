import { useLocation, useParams } from "react-router-dom"

const ProductDetail = props => {
    const { id } = useParams()
    return (
        <div>ProductDetail-{id}</div>
    )
}

export default ProductDetail