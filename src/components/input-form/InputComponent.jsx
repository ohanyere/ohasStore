const InputComponent = ({...oherProps}) => {
    console.log(oherProps.value)
    return ( 
        <div>
            <h1>name</h1>
            <input  {...oherProps}  />
        </div>
     );
}
 
export default InputComponent;