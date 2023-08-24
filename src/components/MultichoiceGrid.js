import React, { useState } from 'react'
import '../styles/grid.css'

const MultichoiceGrid = () => {
    const [gridData, setGridData] = useState( {
        row1: '',
        row2: '',
        row3: '',
    } );

    const handleRadioChange = ( row, value ) => {
        setGridData( ( prevGridData ) => ( {
            ...prevGridData,
            [row]: value,
        } ) );
    };
  return (
      <div className='mcq'>
          <h1>Multi choice Grid <span>*</span></h1>
          <table className='styled-grid'>
              <thead>
                  <tr>
                      <th></th>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                  </tr>
              </thead>
              <tbody>
                  {Object.keys( gridData ).map( ( row ) => (
                      <tr key={row}>
                          <td>{row}</td>
                          <td>
                              <label className='checkbox-label'>
                                  <input
                                      type="radio"
                                      name={row}
                                      value="Option 1"
                                      checked={gridData[row] === 'Option 1'}
                                      onChange={() => handleRadioChange( row, 'Option 1' )}
                                      required
                                  />
                              </label>
                          </td>
                          <td>
                              <label className='checkbox-label'>
                                  <input
                                      type="radio"
                                      name={row}
                                      value="Option 2"
                                      checked={gridData[row] === 'Option 2'}
                                      onChange={() => handleRadioChange( row, 'Option 2' )}
                                  />
                              </label>
                          </td>
                          <td>
                              <label className='checkbox-label'>
                                  <input
                                      type="radio"
                                      name={row}
                                      value="Option 3"
                                      checked={gridData[row] === 'Option 3'}
                                      onChange={() => handleRadioChange( row, 'Option 3' )}
                                  />
                              </label>
                          </td>
                      </tr>
                  ) )}
              </tbody>
          </table>
      
    </div>
  )
}

export default MultichoiceGrid
