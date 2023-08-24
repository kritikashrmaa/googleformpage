import React, { useState } from 'react'

const Paragraph = () => {

    const [paragraphText, setParagraphText] = useState( '' );

    const handleParagraphChange = ( e ) => {
        setParagraphText( e.target.value );
    };
  return (
      <div className='mcq'>
          <h1>Paragraph<span>*</span></h1>
          <label>
             
              <textarea
                  value={paragraphText}
                  onChange={handleParagraphChange}
                  rows={1} // You can adjust the number of rows as needed
              />
          </label>
      
    </div>
  )
}

export default Paragraph
