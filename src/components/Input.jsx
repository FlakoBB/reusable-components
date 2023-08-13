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

const SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
  FULLW: 'fullWidth'
}

const Input = ({ id, type, name, required, size, label, placeholder, value, helperText, startIcon, endIcon, color, error, multiline, rows, disabled }) => {
  const [isFocus, setIsFocus] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [inputColor, setInputColor] = useState(color)
  const [isError, setIsError] = useState('')
  const [newSize, setNewSize] = useState('')

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

  const getSize = (sz) => {
    switch (sz) {
      case SIZES.SMALL:
        setNewSize(styles.sm)
        break
      case SIZES.MEDIUM:
        setNewSize(styles.md)
        break
      case SIZES.LARGE:
        setNewSize(styles.lg)
        break
      case SIZES.FULLW:
        setNewSize(styles.fullWidth)
        break
      default:
        setNewSize(styles.md)
    }
  }

  useEffect(() => {
    getColor(color)

    if (error) {
      setIsError(styles.error)
    }

    getSize(size)
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
    <div className={`${styles.inputGroup} ${isFocus && styles.focus} ${inputColor} ${isError} ${newSize}`}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <div className={styles.fieldContainer}>
        {
          startIcon && !endIcon && <i className={`bi bi-${startIcon}`} />
        }
        {
          !multiline
            ? <input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                value={inputValue}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputValue}
                disabled={disabled}
                required={required}
              />
            : <textarea
                id={id}
                name={name}
                placeholder={placeholder}
                value={inputValue}
                rows={rows}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleInputValue}
                disabled={disabled}
                required={required}
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
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  helperText: PropTypes.string,
  startIcon: PropTypes.string,
  endIcon: PropTypes.string,
  color: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool
}

Input.defaultProps = {
  label: 'Label',
  type: 'text',
  name: '',
  placeholder: 'Placeholder',
  value: '',
  color: '',
  rows: '4',
  disabled: false,
  required: false
}

export default Input
