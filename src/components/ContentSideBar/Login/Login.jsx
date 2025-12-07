import styles from './styles.module.scss';
import InputCommon from '@components/InputCommon/InputCommon';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { ToastContext } from '../../../contexts/ToastProvider';

const Login = () => {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegiter, setIsRegiter] = useState(false);
    const {toast} = useContext(ToastContext)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            cfmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match')
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const handleToggle = () => {
        setIsRegiter(!isRegiter);
        formik.resetForm();
    };

    return (
        <div className={container}>
            <div className={title}>{isRegiter ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon id="email" label="Email" type="text" isRequired formik={formik} />

                <InputCommon
                    id="password"
                    label="Password"
                    type="password"
                    isRequired
                    formik={formik}
                />

                {isRegiter && (
                    <InputCommon
                        id="cfmpassword"
                        label="Confirm Password"
                        type="password"
                        isRequired
                        formik={formik}
                    />
                )}

                {!isRegiter && (
                    <div className={boxRememberMe}>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                )}

                <Button content={isRegiter ? 'REGISTER' : 'LOGIN'} type="submit" onClick={() => toast.success('Success')} />
            </form>
            <Button
                content={isRegiter ? 'Already have an account?' : 'Create an account'}
                type="submit"
                isPrimary={false}
                style={{ marginTop: '10px' }}
                onClick={handleToggle}
            />
            {!isRegiter && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
};

export default Login;
