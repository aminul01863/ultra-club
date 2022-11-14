import "./Exercies.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Exercise = (props) => {
  const { timeToAdd, product } = props;
  const { img, timeRequired, title, name, age } = product;

  return (
    <div className="dumbbell-info">
      <div className="dumbbell-container">
        <img src={img} alt="" />
        <div className="mt-3 ">
          <h6 className="fs-5">Name :{name}</h6>
          <small>{title}</small>
          <h6 className="mt-2">Time Required: {age} Yer</h6>
          <h6 className="mt-2">Time Required: {timeRequired} sec</h6>
          <Button
            onClick={() => timeToAdd(product)}
            className="cart-btn mt-1 p-2 ">
            <small>
              Add To list <FontAwesomeIcon icon={faCartPlus} />
            </small>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
