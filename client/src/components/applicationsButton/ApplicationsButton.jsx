import React, { useState } from 'react';

import './applicationsButton.scss';

const ApplicationsButton = ({title, styleing, setForm}) => {

    const [clazz, setClazz] = useState(true)
    return (
        <div onClick={() => setForm(true)} className={clazz ? `applicationsButton ${styleing}` : `applicationsButton ${styleing}`}>
            <div className="applicationsButton__title">{title}</div>
        </div>
    );
};

export default ApplicationsButton;