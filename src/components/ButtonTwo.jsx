
import "./buttonTwo.css";
const ButtonTwo = ({label, iconURL}) => {
  return (
    <button className="buttonTwo">
    {label}
    { iconURL &&
    <img src={iconURL} alt="" className=""
    />
  } 
    </button>
  )
}

export default ButtonTwo