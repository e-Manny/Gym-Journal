import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");

  const history = useHistory();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch("/exercises", {
      method: "post",
      body: JSON.stringify(newExercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the exercise!");
    } else {
      alert(`Failed to add exercise, status code = ${response.status}`);
    }
    history.push("/");
  };

  return (
    <>
      <article>
        <h2>Enter the values for your new exercise</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <fieldset>
            <legend>Which exercise are you adding?</legend>
            <label for="name">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              required
            />

            <label for="reps">Reps</label>
            <input
              type="number"
              value={reps}
              placeholder="1"
              min="1"
              onChange={(e) => setReps(e.target.value)}
              id="reps"
            />

            <label for="weight">Weight</label>
            <input
              type="number"
              placeholder="100"
              min="1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              id="weight"
            />

            <label for="unit">Unit</label>
            <input
              type="text"
              placeholder="lbs"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              id="unit"
            />

            <label for="date">Date</label>
            <input
              type="text"
              placeholder="12/20/2022"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              id="date"
            />

            <label for="submit">
              <button type="submit" onClick={addExercise} id="submit">
                Add
              </button>{" "}
            </label>
          </fieldset>
        </form>
      </article>
    </>
  );
};

export default AddExercisePage;
