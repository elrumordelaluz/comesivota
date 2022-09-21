import { useState } from 'react'
import { Input } from '@aurora-kit/react'
import EyeIcon from './icons/Eye'
import styles from '../styles/modals.module.css'

export default function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <Input type={showPassword ? 'text' : 'password'} {...props}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          setShowPassword((s) => !s)
        }}
        className={styles.showHidePassword}
      >
        <EyeIcon crossed={showPassword} />
      </button>{' '}
    </Input>
  )
}
