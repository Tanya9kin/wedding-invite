import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

const restrictions = ["none", "Vegan", "Vegeterian"];
const formFeilds = {
  first_name: "",
  last_name: "",
  phone: "",
  plus_one: false,
  plus_one_name: "",
  food_restrictions: restrictions[0],
  confirmation: false,
};

const RSVP = () => {
  const [form, setForm] = useState(formFeilds);

  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  // fetch("/", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   body: encode({ "form-name": "contact", ...form }),
  // })
  //   .then(() => alert("Success!"))
  //   .catch((error) => alert(error));

  // e.preventDefault();

  // navigate("/");
  // };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form name="contact" method="post" netlify>
      <h3>RSVP</h3>
      <input type="hidden" name="form-name" value="contact" />
      <input
        onChange={handleChange}
        placeholder="First Name"
        name="first_name"
        id="first_name"
        value={form.first_name}
        type="text"
        required
        minLength="2"
        maxLength="12"
      ></input>
      <br />
      <input
        onChange={handleChange}
        placeholder="Last Name"
        name="last_name"
        id="last_name"
        value={form.last_name}
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
        onChange={handleChange}
        type="tel"
        value={form.phone}
        required
        minLength="10"
        maxLength="15"
      ></input>
      <br />
      <label htmlFor="plus_one">Plus One?</label>
      <input
        checked={form.plus_one}
        onChange={(e) => {
          console.log(form);
          setForm({ ...form, plus_one: !form.plus_one });
          console.log(form);
        }}
        name="plus_one"
        id="plus_one"
        type="checkbox"
      ></input>
      <br />
      <input
        hidden={!form.plus_one}
        placeholder="Name of +1"
        name="plus_one_name"
        id="plus_one_name"
        type="text"
        value={form.plus_one_name}
        onChange={handleChange}
        maxLength="30"
      ></input>
      <br />
      <label htmlFor="food_restrictions">Any Food Restristions?</label>
      <select
        id="food_restrictions"
        name="food_restrictions"
        value={form.food_restrictions}
        onChange={handleChange}
      >
        <option value={restrictions[0]}>{restrictions[0]}</option>
        <option value={restrictions[1]}>{restrictions[1]}</option>
        <option value={restrictions[2]}>{restrictions[2]}</option>
      </select>
      <br />
      <label htmlFor="confirmation">Will we be seeing you?</label>
      <input
        onChange={(e) =>
          setForm({ ...form, confirmation: form.confirmation ? false : true })
        }
        name="confirmation"
        id="confirmation"
        checked={form.confirmation}
        type="checkbox"
      ></input>
      <br />
      <input type="submit" value="Submit"></input>
      <NavLink to="/">Go Back</NavLink>
    </form>
  );
};

export default RSVP;
