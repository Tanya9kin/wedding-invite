import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";
import { useTranslation } from "react-i18next";

const prod_mode = false;

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
    // console.log(form);

    const myForm = e.target;
    const formData = new FormData(myForm);
    // console.log(formData.get("phone"));
    // console.log("in RSVP submit");

    const submitButton = document.getElementById("submit_btn");
    submitButton.disabled = true;
    submitButton.classList.add("button--loading");

    if (prod_mode) {
      fetch("/.netlify/functions/index", {
        method: "POST",
        body: JSON.stringify({
          phone: formData.get("phone"),
        }),
      }).then((res) => {
        if (res.status === 200) {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
          })
            .then(() => {
              setTimeout(() => {
                submitButton.disabled = false;
                submitButton.classList.remove("button--loading");
                handleCloseForm();
                navigate("/success");
              }, 400);
            })
            .catch((error) => {
              submitButton.disabled = false;
              submitButton.classList.remove("button--loading");
              alert(error);
              navigate("/failure");
            });
        } else {
          alert("This contact already exists, would you like to update?");
          submitButton.disabled = false;
          submitButton.classList.remove("button--loading");
        }
      });
    } else {
      handleCloseForm();
      navigate("/success");
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleCloseForm = () => {
    const closingAnimation = [{ left: "0px" }, { left: "-440px" }];

    const closingTiming = {
      duration: 2000,
      // easing: "ease-in",
      fill: "both",
    };

    document.getElementById("RSVP").animate(closingAnimation, closingTiming);
    setTimeout(() => {
      navigate("/");
    }, 100);
  };

  return (
    <div id="RSVP">
      <form
        name="contact"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <h3>{t("RSVP")}</h3>
        {prod_mode === false ? (
          <h4 id="demonstration">
            This form is here for demonstration purposes only
          </h4>
        ) : (
          ""
        )}
        <input type="hidden" name="form-name" value="contact" />
        <input
          onChange={handleChange}
          placeholder={t("form.first_name")}
          name="first_name"
          id="first_name"
          value={form.first_name}
          type="text"
          required
          minLength="1"
          maxLength="12"
        ></input>
        <input
          onChange={handleChange}
          placeholder={t("form.last_name")}
          name="last_name"
          id="last_name"
          value={form.last_name}
          type="text"
          maxLength="12"
          minLength="1"
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
            <label htmlFor="yes">
              <input
                type="radio"
                id="yes"
                className="checkbox"
                name="confirmation"
                value="yes"
              />
              {t("form.yes")}
            </label>
            <label htmlFor="no">
              <input
                type="radio"
                id="no"
                name="confirmation"
                value="no"
                className="checkbox"
              />{" "}
              {t("form.no")}
            </label>
            <label htmlFor="not_sure">
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

        <button type="submit" id="submit_btn" disabled={true}>
          <div className="button__text">{t("form.submit")}</div>
        </button>
        <button id="back_btn" type="reset" onClick={handleCloseForm}>
          {t("form.back")}
        </button>
      </form>
    </div>
  );
};

export default RSVP;
