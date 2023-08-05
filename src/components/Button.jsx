import PropTypes from 'prop-types'
import styles from '../styles/buttons.module.css'
import { useEffect, useState } from 'react'

// * Button States
// variant (default || outline || test)
// size (sm || md || lg)
// color (primary || secondary || danger )
// shadow (true || false)
// disable  (true || false)
// icon (left || right)

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

const Button = ({ value, variant, size, color, disableShadow, disabled, icon }) => {
  const [variantStyle, setVariantStyle] = useState(styles.default)
  const [shadow, setShadow] = useState(styles.disableShadow)
  const [colorStyle, setColorStyle] = useState(styles.default)

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

  useEffect(() => {
    console.log('entro al useEffect')
    getVariant(variant)

    if (!disableShadow) {
      setShadow('')
    }

    getColor(color)
  }, [])

  return (
    <button
      className={`${styles.btn} ${variantStyle} ${shadow} ${colorStyle}`}
    >
      {value}
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string
}

export default Button
