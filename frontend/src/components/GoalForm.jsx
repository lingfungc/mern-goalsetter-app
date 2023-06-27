import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setGoal } from "../features/goals/goalsSlice";

import Spinner from "../components/Spinner";

const GoalForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(setGoal({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Set a Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            placeholder="Learn how MERN app works"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Set Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default GoalForm;
