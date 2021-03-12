import React from "react";
import { useForm } from "react-hook-form";
import "./Signup.css";
const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              name="email"
              placeholder="Email"
              className="joinInput"
              type="text"
              ref={register}
            />
          </div>
          <div>
            <input
              name="username"
              placeholder="Username"
              className="joinInput"
              type="text"
              ref={register}
            />
          </div>
          <div>
            <input
              name="password"
              placeholder="Password"
              className="joinInput"
              type="password"
              ref={register}
            />
          </div>
          <div>
            <input
              name="room"
              placeholder="Room to join"
              className="joinInput"
              type="text"
              ref={register}
            />
          </div>
          <button className={"button mt-20"} type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
