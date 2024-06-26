import RegisterButton from '../RegistorButton'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'

import {
    AuthLink,
    PasswordToggle,
    RestoreBtnStyled,
    StyledAuthForm,
    StyledAuthInput,
    StyledRegisterWrapp,
    StyledTitle,
    ValidationError,
    WrapInPass,
} from '../../pages/AuthPage/AuthPage.styled'

import sprite from '../../../public/icons/sprite.svg'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../types/types'
import { loginUser } from '../../redux/auth/operations'

interface LoginFormData {
    email: string
    password: string
}

const Login: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<LoginFormData>(
      // { resolver: yupResolver(schemaLogin) }
    )

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const isPasswordValid = () => {
        return password.length >= 8 && password.length <= 64 && !errors.password
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const passwordValue = e.target.value
        setPassword(passwordValue)
        setValue('password', passwordValue)
    }

    const submit: SubmitHandler<LoginFormData> = async (data) => {
        try {
            await dispatch(loginUser(data)).unwrap()
            reset()
            navigate('/home')
            toast.success('Login successful!')
        } catch (error) {
            navigate('/')
            toast.error('Login failed.')
        }
    }

    return (
        <StyledRegisterWrapp>
            <StyledTitle>Login</StyledTitle>
            <StyledAuthForm onSubmit={handleSubmit(submit)}>
                <StyledAuthInput
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                />
                {errors?.email && (
                    <ValidationError>{errors.email.message}</ValidationError>
                )}

                <WrapInPass>
                    <StyledAuthInput
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        {...register('password')}
                        onChange={handlePasswordChange}
                        className={`${
                            password.length === 0
                                ? 'empty'
                                : isPasswordValid()
                                ? 'valid'
                                : 'invalid'
                        }`}
                    />
                    <PasswordToggle
                        onClick={() => togglePasswordVisibility()}
                        type="button"
                    >
                        {showPassword ? (
                            <svg>
                                <use
                                    xlinkHref={`${sprite}#icon-eye`}
                                    width={18}
                                    height={18}
                                ></use>
                            </svg>
                        ) : (
                            <svg>
                                <use
                                    xlinkHref={`${sprite}#icon-eye-off`}
                                    width={18}
                                    height={18}
                                ></use>
                            </svg>
                        )}
                    </PasswordToggle>
                </WrapInPass>
                {errors?.password && (
                    <ValidationError>{errors.password.message}</ValidationError>
                )}
                <RegisterButton onClick={handleSubmit(submit)}>
                    Enter
                </RegisterButton>
            </StyledAuthForm>
            <RestoreBtnStyled href="/auth/restorePassword">
                Restore password
            </RestoreBtnStyled>
            <AuthLink to="/auth/register">Register</AuthLink>
        </StyledRegisterWrapp>
    )
}

export default Login
