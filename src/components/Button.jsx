import PropTypes from 'prop-types'
import styles from '../styles/buttons.module.css'
import { useEffect, useState } from 'react'

// * Button States
// ToDo: icon (left || right)

const VARIANTS = {
  DEFAULT: 'default',
  OUTLINE: 'outline',
  TEXT: 'text'
}

const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  DANGER: 'danger'
}

const SIZE = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg'
}

const Button = ({ type, id, customClass, value, variant, size, color, disableShadow, iconStart, iconEnd, disabled, onClick }) => {
  const [variantStyle, setVariantStyle] = useState(styles.default)
  const [shadow, setShadow] = useState(styles.disableShadow)
  const [colorStyle, setColorStyle] = useState(styles.default)
  const [sizeStyle, setSizeStyle] = useState(styles.small)

  const getVariant = (vars) => {
    switch (vars) {
      case VARIANTS.DEFAULT:
        setVariantStyle(styles.default)
        break
      case VARIANTS.OUTLINE:
        setVariantStyle(styles.outline)
        break
      case VARIANTS.TEXT:
        setVariantStyle(styles.text)
        break
      default:
        setVariantStyle(styles.default)
    }
  }

  const getColor = (clr) => {
    switch (clr) {
      case COLORS.PRIMARY:
        setColorStyle(styles.primaryColor)
        break
      case COLORS.SECONDARY:
        setColorStyle(styles.secondaryColor)
        break
      case COLORS.DANGER:
        setColorStyle(styles.dangerColor)
        break
      default:
        setColorStyle(styles.default)
    }
  }

  const getSize = (sz) => {
    switch (sz) {
      case SIZE.SMALL:
        setSizeStyle(styles.small)
        break
      case SIZE.MEDIUM:
        setSizeStyle(styles.medium)
        break
      case SIZE.LARGE:
        setSizeStyle(styles.large)
        break
      default:
        setSizeStyle(styles.small)
        break
    }
  }

  useEffect(() => {
    getVariant(variant)

    if (!disableShadow) {
      setShadow('')
    }

    getColor(color)

    getSize(size)
  }, [])

  return (
    <button
      type={type}
      id={id}
      className={`${customClass} ${styles.btn} ${variantStyle} ${shadow} ${colorStyle} ${sizeStyle}`}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  customClass: PropTypes.string,
  value: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  disableShadow: PropTypes.bool,
  iconStart: PropTypes.string,
  iconEnd: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: 'button',
  id: '',
  customClass: '',
  value: 'Button'
}

export default Button
