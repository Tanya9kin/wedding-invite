import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Success = () => {
  const { t } = useTranslation();
  return (
    <div className="failure">
      <h2>{` ${t("form.failure")}`}</h2>
      <button>
        <NavLink to="/">{t("form.back")}</NavLink>
      </button>
    </div>
  );
};

export default Success;
