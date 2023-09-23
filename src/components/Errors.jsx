import '../css/errors.css'

const Errors = ({ children }) => {
  return (
    <p className="error">
        { children }
    </p>
  )
}

export default Errors