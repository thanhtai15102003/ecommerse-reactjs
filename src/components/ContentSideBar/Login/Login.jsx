import styles from './styles.module.scss';
import InputCommon from '@components/InputCommon/InputCommon';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/StoreProvider';

const Login = () => {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegiter, setIsRegiter] = useState(false);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);
    const { setIsOpen, handleGetListProductCart } = useContext(SideBarContext);
    const { setUserId } = useContext(StoreContext);

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
        onSubmit: async (values) => {
            if (isLoading) return;
            const { email: username, password } = values;
            setIsLoading(true);
            if (isRegiter) {
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
            if (!isRegiter) {
                await signIn({ username, password })
                    .then((res) => {
                        setIsLoading(false);
                        const { id, token, refreshToken } = res.data;
                        setUserId(id);
                        Cookies.set('userId', id);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        toast.success('Sign in successfully');
                        setIsOpen(false);
                        handleGetListProductCart(id, 'cart');
                    })
                    .catch((err) => {
                        setIsLoading(false);
                        toast.error('Sign in failed');
                    });

                
               
            }
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

                <Button
                    content={isLoading ? 'Loading...' : isRegiter ? 'REGISTER' : 'LOGIN'}
                    type="submit"
                    // onClick={() => toast.success('Success')}
                />
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
