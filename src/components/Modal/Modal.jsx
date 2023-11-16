// import { Link, Route, Routes } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import s from './Modal.module.css'
import FormElem from '../FormElem/FormElem'
import { ReactComponent as XMarkIcon } from '../../icons/xmark-solid.svg'

function Modal({ active, setActive }) {
    return (
        <div className={`${s.modal} ${active && s.active}`}>
            <div className={`${s.modal_content} ${active && s.active}`}>
                <XMarkIcon className={s.xmark_icon} onClick={() => setActive(false)} />
                <Routes>
                    <Route
                        path='/login'
                        element={<FormElem
                            title='Авторизация'
                            button={{ submit: 'Авторизоваться', redirect: 'Регистрация' }}
                            link={'/registration'}
                            type={'login'}
                            input={{email: 'email', password: 'password'}}
                            infoText="Введите логин и пароль вашего аккаунта"
                        />} />
                    <Route
                        path='/registration'
                        element={<FormElem
                            title='Регистрация'
                            button={{ submit: 'Зарегистрироваться', redirect: 'Авторизация' }}
                            link={'/login'}
                            type={'reg'}
                            input={{email: 'email', password: 'password', secondPassword: 'Confirm your password'}}
                            infoText="Регистрируясь на сайте вы соглашаетесь на что-то"
                        />} />
                    <Route
                        path='/reset'
                        element={<FormElem title='Сброс пароля'
                            button={{ submit: 'Сброс пароля', redirect: 'Авторизация' }}
                            link={'/login'}
                            type={'reset'}
                            input={{email: 'email'}}
                            infoText="Укажите почту зарегистрированного аккаунта. Ссылка на сброс пароля будет действовать 24 часа"
                        />} />
                </Routes>
            </div>
        </div>
    )
}

export default Modal