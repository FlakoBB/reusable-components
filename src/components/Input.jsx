import PropTypes from 'prop-types'
import styles from '../styles/inputs.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useEffect, useState } from 'react'

const COLORS = {
  BLUE: 'blue',
  GREEN: 'green',
  PINK: 'pink',
  PURPLE: 'purple'
}

const Input = ({ id, label, placeholder, value, helperText, startIcon, endIcon, color, multiline, rows }) => {
  const [isFocus, setIsFocus] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [inputColor, setInputColor] = useState(color)

  const getColor = (clr) => {
    switch (clr) {
      case COLORS.BLUE:
        setInputColor(styles.blue)
        break
      case COLORS.GREEN:
        setInputColor(styles.green)
        break
      case COLORS.PINK:
        setInputColor(styles.pink)
        break
      case COLORS.PURPLE:
        setInputColor(styles.purple)
        break
      default:
        setInputColor('')
    }
  }

  useEffect(() => {
    getColor(color)
  }, [])

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
    <div className={`${styles.inputGroup} ${isFocus && styles.focus} ${inputColor}`}>
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
  color: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.string
}

Input.defaultProps = {
  label: 'Label',
  placeholder: 'Placeholder',
  value: '',
  color: '',
  rows: '4'
}

export default Input
