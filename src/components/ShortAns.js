import React, { useState } from 'react'

const ShortAns = () => {
    const [shortAnswer, setShortAnswer] = useState( '' );

    const handleShortAnswerChange = ( e ) => {
        setShortAnswer( e.target.value );
    };
  return (
      <div className='mcq'>
          <h1>Short answer<span> *</span></h1>
          <div
              contentEditable="true"
              className="content-editable"
              onInput={handleShortAnswerChange}
              required
          >
              {shortAnswer}
          </div>
      
    </div>
  )
}

export default ShortAns
