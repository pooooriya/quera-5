
export const Button = ({ title, onClick }) => {
    return (
        <input type="button" onClick={onClick} value={title} />
    )
}

export default Button;