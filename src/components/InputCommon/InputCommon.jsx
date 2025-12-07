import styles from './styles.module.scss';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';

const InputCommon = ({ label, type, isRequired = false, ...props }) => {
    const { labelInput, boxInput, container, boxIcon, errMsg } = styles;
    const isPassword = type === 'password';
    const { formik, id } = props;

    const [showPassword, setShowPassword] = useState(false);
    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isErr = formik.touched[id] && formik.errors[id];
    const messErr = formik.errors[id];

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                )}
                {isErr && <div className={errMsg}>{messErr}</div>}
            </div>
        </div>
    );
};

export default InputCommon;
