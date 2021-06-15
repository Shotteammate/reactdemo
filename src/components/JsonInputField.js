import React, { useState } from 'react';
import './JsonInputField.css'

const JsonInputField = ({updateData}) => {
    const [data, setData] = useState('')
    const [isError, setIsError] = useState(false)

    const handleOnChange = (e) => {
        setData(e.target.value)
    }

    const handleSubmit = () => {
        if (isValidJSON(data)){
            try {
                const dataArray = JSON.parse(data)
                updateData(dataArray)
            } catch (err) {
                // TODO: popup show error
                setIsError(true)
            }
        } else {
            setIsError(true)
        }
    }

    const isValidJSON = (str) => {
        try {
            JSON.parse(str)
        } catch (err) {
            return false
        }
        return true
    }

    const clearErrorStatus = () => {
        setIsError(false)
    }

    return (
        <div className='input-container'>
            <h4>Input</h4>
            <label htmlFor='json_data'>
                <textarea
                    className="input-area"
                    id="json_data"
                    name="generalTextArea"
                    value={data}
                    onChange={handleOnChange}
                    onFocus={clearErrorStatus}
                >
                </textarea>
            </label>
            <button 
                className="submit-btn"
                onClick={handleSubmit}
                disabled={data===''}
            >Submit</button>
            {isError && <div className="error-box">JSON input is not valid. Please try again.</div>}
        </div>
    )
}

export default JsonInputField;