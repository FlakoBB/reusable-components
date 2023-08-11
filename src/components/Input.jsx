import PropTypes from 'prop-types'
import styles from '../styles/inputs.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Input = ({ id, label, placeholder, value, helperText, startIcon, endIcon, multiline, rows }) => {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <div className={styles.fieldContainer}>
        {
          startIcon && !endIcon && <i className={`bi bi-${startIcon}`} />
        }
        {
          !multiline
            ? <input id={id} placeholder={placeholder} defaultValue={value} />
            : <textarea id={id} placeholder={placeholder} defaultValue={value} rows={rows} />
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
  rows: '4'
}

export default Input
