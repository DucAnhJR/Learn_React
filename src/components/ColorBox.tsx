import React, { useState } from "react";

const ColorBox = () => {
  const [color, setColor] = useState(true);
  return (
    <div>
      <div className="color-box" style={{ backgroundColor: color ? 'red' : 'blue' }}>
        <p>Color: {color}</p>
      </div>
      <button onClick={() => setColor(!color)}>Change Color</button>
    </div>
  );
};

export default ColorBox;
