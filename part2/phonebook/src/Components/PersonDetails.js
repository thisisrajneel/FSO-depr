import React from "react";

const Details = ({  name, number, id }) => (
    <li key={id} >
        {name} {number}
    </li>
);

export default Details;
