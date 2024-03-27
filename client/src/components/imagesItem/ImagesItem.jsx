import React from 'react';

import './imagesItem.scss';

const ImagesItem = ({img}) => {
    return (
        <div className="imagesItem" >
            <img src={img} alt="img" />
        </div>
    );
};

export default ImagesItem;