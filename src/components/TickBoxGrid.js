import React, { useState } from 'react'
import '../styles/grid.css'

const TickBoxGrid = () => {
    const [gridData, setGridData] = useState( {
        row1: {
            col1: false,
            col2: false,
            col3: false,
        },
        row2: {
            col1: false,
            col2: false,
            col3: false,
        },
        row3: {
            col1: false,
            col2: false,
            col3: false,
        },
    } );

    const handleCheckboxChange = ( row, col ) => {
        setGridData( ( prevGridData ) => ( {
            ...prevGridData,
            [row]: {
                ...prevGridData[row],
                [col]: !prevGridData[row][col],
            },
        } ) );
    };
  return (
      <div className='mcq'>
          <h1>Tick Box Grid <span>*</span></h1>
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
                          {Object.keys( gridData[row] ).map( ( col ) => (
                              <td key={col}>
                                  <label className='checkbox-label'>
                                      <input
                                          type="checkbox"
                                          checked={gridData[row][col]}
                                          onChange={() => handleCheckboxChange( row, col )}
                                      />
                                  </label>
                              </td>
                          ) )}
                      </tr>
                  ) )}
              </tbody>
          </table>

      
    </div>
  )
}

export default TickBoxGrid
