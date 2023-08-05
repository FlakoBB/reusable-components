import PropTypes from 'prop-types'
import styles from '../styles/buttons.module.css'

const VARIANTS = {
  DEFAULT: 'default',
  OUTLINE: 'outline',
  TEXT: 'text'
}

const Button = ({ value, variant }) => {
  const setVariant = () => {
    switch (variant.toLowerCase()) {
      case VARIANTS.DEFAULT:
        return styles.default
      case VARIANTS.OUTLINE:
        return styles.outline
      case VARIANTS.TEXT:
        return styles.text
      default:
        return styles.default
    }
  }

  return (
    <button className={variant ? `${styles.default} ${setVariant()}` : styles.default}>{value}</button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  variant: PropTypes.string
}

export default Button
