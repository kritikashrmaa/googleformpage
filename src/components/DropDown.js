import React, { useState } from 'react'

const DropDown = () => {
    const [selectedOption, setSelectedOption] = useState( '' );

    const handleSelectChange = ( e ) => {
        setSelectedOption( e.target.value );
    };

  return (
      <div className='mcq'>
          <h1>Drop Down<span>*</span></h1>
          <label>
              
              <select value={selectedOption} onChange={handleSelectChange} className='styled-dropdown'>
                  <option value="">Choose</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
              </select>
          </label>
      
    </div>
  )
}

export default DropDown
