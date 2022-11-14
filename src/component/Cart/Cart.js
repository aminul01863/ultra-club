import "./Cart.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

const Cart = (props) => {
  const [time, setTime] = useState(0);
  let exercise = 0;
  for (const time of props.cart) {
    exercise = exercise + time.timeRequired;
  }
  const notify = () => {
    toast("Complete Successful!");
  };
  const handelTime = (times) => {
    setTime(times);
  };

  return (
    <div className="exercise-details">
      <h3>Add A break</h3>
      <div className="time-break ">
        <Button onClick={() => handelTime(15)}>15</Button>
        <Button onClick={() => handelTime(30)}>30</Button>
        <Button onClick={() => handelTime(45)}>45</Button>
        <Button onClick={() => handelTime(60)}>60</Button>
      </div>
      <p className="fs-4">Exercise details</p>
      <p className="fs-4">Exercise Time: {exercise} sec</p>

      <p className="fs-4">
        Break Time :<small>{time}</small>
      </p>

      <button onClick={notify} className="complete-btn">
        Active Complete
      </button>

      <ToastContainer />
    </div>
  );
};

export default Cart;
