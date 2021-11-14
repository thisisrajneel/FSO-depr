import React from "react";

const Details = ({  name, number }) => (
    <li key={name} >
        {name} {number}
    </li>
);

export default Details;
