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
      .then(() => {
        // alert("Success!");
        navigate("/success");
      })
      .catch((error) => alert(error));
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div id="RSVP">
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
          pattern="^[\D'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
          required
          minLength="2"
          maxLength="12"
        ></input>
        <input
          onChange={handleChange}
          placeholder={t("form.last_name")}
          name="last_name"
          id="last_name"
          value={form.last_name}
          type="text"
          pattern="^[\D'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
          maxLength="12"
          minLength="2"
          required
        ></input>
        <input
          name="phone"
          id="phone"
          placeholder={t("form.phone")}
          onChange={handleChange}
          type="tel"
          pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
          value={form.phone}
          required
          minLength="10"
          maxLength="15"
        ></input>
        <label htmlFor="plus_one">
          {t("form.plus_one")}
          <input
            className="checkbox"
            checked={form.plus_one}
            onChange={(e) => {
              console.log(form);
              setForm({ ...form, plus_one: !form.plus_one });
              console.log(form);
            }}
            name="plus_one"
            id="plus_one"
            pattern="^[\D'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$"
            type="checkbox"
          ></input>
        </label>
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
        <div id="confirmation">
          {t("form.confirmation")}
          <div className="horizontal">
            <label for="yes">
              <input
                type="radio"
                id="yes"
                className="checkbox"
                name="confirmation"
                value="yes"
              />
              {t("form.yes")}
            </label>
            <label for="no">
              <input
                type="radio"
                id="no"
                name="confirmation"
                value="no"
                className="checkbox"
              />{" "}
              {t("form.no")}
            </label>
            <label for="not_sure">
              <input
                type="radio"
                id="not_sure"
                name="confirmation"
                value="not sure"
                className="checkbox"
              />
              {t("form.unsure")}
            </label>
          </div>
        </div>

        <input type="submit" value={t("form.submit")}></input>
        <button>
          <NavLink to="/">{t("form.back")}</NavLink>
        </button>
      </form>
    </div>
  );
};

export default RSVP;
