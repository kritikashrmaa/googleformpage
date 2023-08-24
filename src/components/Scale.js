import React, { useState } from 'react'
import '../styles/scale.css'

const Scale = () => {
   

    const [selectedValue, setSelectedValue] = useState( '' );

    const handleRadioChange = ( e ) => {
        setSelectedValue( e.target.value );
    };
  return (
      <div className='mcq'>
          <h1>Linear Scale <span>*</span></h1>
          <div className="rating-container">
              
              <div className="rating-values">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
              </div>
              <div className="rating-buttons">
                  Worst
                  <label>
                      <input
                          type="radio"
                          value="1"
                          checked={selectedValue === '1'}
                          onChange={handleRadioChange}
                      />
                  </label>
                  <label>
                      <input
                          type="radio"
                          value="2"
                          checked={selectedValue === '2'}
                          onChange={handleRadioChange}
                      />
                  </label>
                  <label>
                      <input
                          type="radio"
                          value="3"
                          checked={selectedValue === '3'}
                          onChange={handleRadioChange}
                      />
                  </label>
                  <label>
                      <input
                          type="radio"
                          value="4"
                          checked={selectedValue === '4'}
                          onChange={handleRadioChange}
                      />
                  </label>
                  <label>
                      <input
                          type="radio"
                          value="5"
                          checked={selectedValue === '5'}
                          onChange={handleRadioChange}
                      />
                  </label>

                  Best
                  
              </div>
          </div>
          
      
    </div>
  )
}

export default Scale
