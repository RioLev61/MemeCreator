const InputForm = ({ onChange, value, name }) => {
  return (
    <input
      onChange={onChange}
      className="form-control w-70 m-50 m-auto d-block"
      type="text"
      placeholder="Ingresa tu texto"
      name={name}
     
      value={value}
    />
  )
}
export default InputForm
