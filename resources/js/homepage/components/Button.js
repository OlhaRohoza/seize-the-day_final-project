function Button({ name, handleClick }) {
    return (
        <button type="button" onClick={handleClick} >{name} </button>
    )
}
export default Button;