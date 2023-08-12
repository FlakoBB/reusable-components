import PropTypes from 'prop-types'
import styles from '../styles/inputs.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'

const Input = ({ id, label, placeholder, value, helperText, startIcon, endIcon, multiline, rows }) => {
  const [isFocus, setIsFocus] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const handleFocus = () => {
    setIsFocus(true)
  }

  const handleBlur = () => {
    if (inputValue === '') {
      setIsFocus(false)
    }
  }

  const handleInputValue = (event) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  return (
    <div className={`${styles.inputGroup} ${isFocus && styles.focus}`}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <div className={styles.fieldContainer}>
        {
          startIcon && !endIcon && <i className={`bi bi-${startIcon}`} />
        }
        {
          !multiline
            ? <input
                id={id}
                placeholder={placeholder}
                value={inputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputValue}
              />
            : <textarea
                id={id}
                placeholder={placeholder}
                value={inputValue}
                rows={rows}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputValue}
              />
        }
        {
          endIcon && !startIcon && <i className={`bi bi-${endIcon}`} />
        }
      </div>
      {
        helperText && <span className={styles.helperText}>{helperText}</span>
      }
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.string
}

Input.defaultProps = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
  rows: '4'
}

export default Input
