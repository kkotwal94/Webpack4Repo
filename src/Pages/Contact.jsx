import React, { useState } from 'react';

const Contact = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      Contact page #{number}
      <button
        type="button"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increment +
      </button>
    </div>
  );
};

export default Contact;
