import React from "react";
import ApplicationsButton from "../applicationsButton/ApplicationsButton";

import "./applications.scss";

const Applications = ({
  title,
  descr,
  additionally,
  additionally2,
  button,
  style,
  setForm,
}) => {
  return (
    <div className={style ? `applications ${style}` : "applications"}>
      <div className="applications__left">
        <h2 className="applications__left-top">{title}</h2>
        <p className="applications__left-bottom">{descr}</p>
        {additionally && (
          <p className="applications__left-bottom">{additionally}</p>
        )}
        {additionally2 && (
          <p className="applications__left-bottom applications__left-bottom__additionally">
            {additionally2}
          </p>
        )}
      </div>
      <ApplicationsButton title={button} setForm={setForm} />
    </div>
  );
};

export default Applications;
