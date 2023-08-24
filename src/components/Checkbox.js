import React, { useState } from 'react'

const Checkbox = () => {

    const [checkboxes, setCheckboxes] = useState( {
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    } );

    const handleCheckboxChange = ( e ) => {
        const { name, checked } = e.target;
        setCheckboxes( ( prevCheckboxes ) => ( {
            ...prevCheckboxes,
            [name]: checked,
        } ) );
    };
  return (
      <div className='mcq'>
          <h1>Checkbox<span> *</span></h1>
          <label>
              <input
                  type="checkbox"
                  name="checkbox1"
                  checked={checkboxes.checkbox1}
                  onChange={handleCheckboxChange}
              />
              Checkbox 1
          </label>
          <br />
          <label>
              <input
                  type="checkbox"
                  name="checkbox2"
                  checked={checkboxes.checkbox2}
                  onChange={handleCheckboxChange}
              />
              Checkbox 2
          </label>
          <br />
          <label>
              <input
                  type="checkbox"
                  name="checkbox3"
                  checked={checkboxes.checkbox3}
                  onChange={handleCheckboxChange}
              />
              Checkbox 3
          </label>
      
    </div>
  )
}

export default Checkbox
