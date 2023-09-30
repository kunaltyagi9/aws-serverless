

const InputField = ({ id, name, type, label, ...props }) => {

    return (
        <div className="form-group mt-2">
          <label 
                htmlFor={id}
            >
                {label}
            </label>
            <input 
                type={type} 
                className="form-control" 
                id={id} 
                name={name} 
                required
                autoComplete="off"
                {...props} 
            />
        </div>
    )
}

export default InputField;