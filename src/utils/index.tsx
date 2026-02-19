import { NumericFormat } from 'react-number-format'

export const localStorageGetItem = (key: string, defaultValue = '') => {
  return localStorage.getItem(key) || defaultValue
}

export const toNumber = (value?: number, fixed = 5, asNumber = false) => {
  if (!value || isNaN(value)) {
    if (!asNumber) {
      fixed = 2
    }
    
return Number(0).toFixed(fixed)
  }
  const formatted = value.toFixed(fixed)

  return asNumber ? Number(formatted) : formatted.toLocaleString()
}

export const toNumberTag = (value = 0, fixed = 5, prefix = '', suffix = '') => {
  if (!value || isNaN(value)) {
    return '0.00'
  }
  
return (
    <NumericFormat
      value={toNumber(value, fixed, true)}
      displayType='text'
      thousandSeparator
      prefix={prefix}
      suffix={suffix}
    />
  )
}
