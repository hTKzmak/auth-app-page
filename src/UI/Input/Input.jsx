import { forwardRef } from 'react'
import s from './Input.module.css'

// отделяет ref от prop'а - forwardRef

const Input = forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={s.inp_elem}/>
    )
})

export default Input