import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const restrictions = ["none", "Vegan", "Vegeterian"];

const RSVP = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneName, setPlusOneName] = useState("");
  const [foodRestrictions, setFoodRestrictions] = useState(restrictions[0]);
  const [confirmation, setConfirmation] = useState(false);

  const renderPlusOne = () => {
    if (plusOne) {
      return (
        <input
          placeholder="Name of +1"
          name="name_of_plus_one"
          id="name_of_plus_one"
          type="text"
          value={plusOneName}
          onChange={(e) => setPlusOneName(e.target.value)}
          maxLength="30"
        ></input>
      );
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setPlusOne(false);
    setPlusOneName("");
    setFoodRestrictions(restrictions[0]);
    setConfirmation(false);
    setPhone("");
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>RSVP</h3>
      <input
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        placeholder="First Name"
        name="first_name"
        id="first_name"
        value={firstName}
        type="text"
        required
        minLength="2"
        maxLength="12"
      ></input>
      <br />
      <input
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        placeholder="Last Name"
        name="last_name"
        id="last_name"
        value={lastName}
        type="text"
        maxLength="12"
        minLength="2"
        required
      ></input>
      <br />
      <input
        name="phone"
        id="phone"
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        required
        minLength="10"
        maxLength="15"
      ></input>
      <br />
      <label htmlFor="plus_one">Plus One?</label>
      <input
        onChange={(e) => (plusOne ? setPlusOne(false) : setPlusOne(true))}
        name="plus_one"
        id="plus_one"
        checked={plusOne}
        type="checkbox"
      ></input>
      <br />
      {renderPlusOne()}
      <br />
      <label htmlFor="food_restrictions">Any Food Restristions?</label>
      <select
        id="food_restrictions"
        name="food_restrictions"
        value={foodRestrictions}
        onChange={(e) => setFoodRestrictions(e.target.value)}
      >
        <option value={restrictions[0]}>{restrictions[0]}</option>
        <option value={restrictions[1]}>{restrictions[1]}</option>
        <option value={restrictions[2]}>{restrictions[2]}</option>
      </select>
      <br />
      <label htmlFor="confirmation">Will we be seeing you?</label>
      <input
        onChange={(e) =>
          confirmation ? setConfirmation(false) : setConfirmation(true)
        }
        name="confirmation"
        id="confirmation"
        checked={confirmation}
        type="checkbox"
      ></input>
      <br />
      <input type="submit" value="Submit"></input>
      <NavLink to="/">Go Back</NavLink>
    </form>
  );
};

export default RSVP;
