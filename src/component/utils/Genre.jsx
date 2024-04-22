import React from 'react';
const Genre = (props) => {
  const { items } = props;
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li  style={ {cursor:'pointer'}}className="list-group-item" key={item._id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Genre;