import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";

const RSVP = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const restrictions = [t("form.none"), t("form.vegan"), t("form.vegeterian")];

  const formFeilds = {
    first_name: "",
    last_name: "",
    phone: "",
    plus_one: false,
    plus_one_name: "",
    food_restrictions: restrictions[0],
    confirmation: false,
  };

  const [form, setForm] = useState(formFeilds);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);

    const myForm = e.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    navigate("/");
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <h3>{t("RSVP")}</h3>
      <input type="hidden" name="form-name" value="contact" />
      <input
        onChange={handleChange}
        placeholder={t("form.first_name")}
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
        placeholder={t("form.last_name")}
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
        placeholder={t("form.phone")}
        onChange={handleChange}
        type="tel"
        value={form.phone}
        required
        minLength="10"
        maxLength="15"
      ></input>
      <br />
      <label htmlFor="plus_one">{t("form.plus_one")}</label>
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
        placeholder={t("form.plus_one_name")}
        name="plus_one_name"
        id="plus_one_name"
        type="text"
        value={form.plus_one_name}
        onChange={handleChange}
        maxLength="30"
      ></input>
      <br />
      <label htmlFor="food_restrictions">{t("form.food_restrictions")}</label>
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
      <label htmlFor="confirmation">{t("form.confirmation")}</label>
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
      <input type="submit" value={t("form.submit")}></input>
      <NavLink to="/">{t("form.back")}</NavLink>
    </form>
  );
};

export default RSVP;
