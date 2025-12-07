import styles from './styles.module.scss';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';

const InputCommon = ({ label, type, isRequired = false }) => {
    const { labelInput, boxInput, container, boxIcon } = styles;
    const isPassword = type === 'password';

    const [showPassword, setShowPassword] = useState(false);
    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default InputCommon;
