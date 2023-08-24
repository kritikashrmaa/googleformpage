import React, { useState } from 'react'

const Mcq = () => {
    const [selectedOption, setSelectedOption] = useState(' '); // State to track selected option

    const handleRadioChange = ( e ) => {
        setSelectedOption( e.target.value );
    };
  return (
      <div className="mcq">
          <h1>MCQ<span> *</span></h1>
          <label>
              <input
                  type="radio"
                  name="option"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleRadioChange}
              />
              Option 1
          </label>
          <br />
          <label>
              <input
                  type="radio"
                  name="option"
                  value="option2"
                  checked={selectedOption === 'option2'}
                  onChange={handleRadioChange}
              />
              Option 2
          </label>
          <br />
          <label>
              <input
                  type="radio"
                  name="option"
                  value="option3"
                  checked={selectedOption === 'option3'}
                  onChange={handleRadioChange}
              />
              Option 3
          </label>


      </div>
  )
}

export default Mcq
