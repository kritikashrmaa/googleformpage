import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import '../styles/file.css'


const File = () => {

    const [selectedFile, setSelectedFile] = useState( null );

    const handleFileChange = ( e ) => {
        setSelectedFile( e.target.files[0] );
    };
    return (
        <div className="mcq">
            <h1>File Upload <span>*</span></h1>
            <div className="file-upload-form">
                <label className="file-upload-label">
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="file-upload-input"
                        required
                    />
                    <span className="file-upload-icon">
                        <FontAwesomeIcon icon={faUpload} />
                    </span>
                    {selectedFile ? selectedFile.name : ' add file'}
                </label>
            </div>
      </div>
      
  )
}

export default File;
