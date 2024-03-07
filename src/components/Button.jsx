
import "./button.css";
const Button = ({ iconURL, label }) => {
  return (
    <button className="button">
      {label}
      { iconURL &&
      <img src={iconURL} alt="" className=""
      />
    } 
      </button>
  );
};

export default Button;
