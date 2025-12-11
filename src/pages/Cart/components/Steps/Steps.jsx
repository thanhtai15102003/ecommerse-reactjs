import styles from '../../styles.module.scss';
import Stepper from './Stepper';

const Steps = () => {
    const { containerSteps, steps, line, textNoti } = styles;

    const dataSteps = [
        {
            number: 1,
            content: 'Shopping Cart'
        },
        {
            number: 2,
            content: 'Check out'
        },
        {
            number: 3,
            content: 'Order status'
        }
    ];

    return (
        <div className={containerSteps}>
            <div className={steps}>
                {dataSteps.map((item, index) => {
                    return (
                        <>
                            <Stepper
                                key={index}
                                number={item.number}
                                content={item.content}
                                isDisable={index != 0}
                            />
                            {index !== dataSteps.length - 1 && <div className={line}></div>}
                        </>
                    );
                })}
            </div>
            <div className={textNoti}>
                You are of time! Checkout now to avoid losing your order
            </div>
        </div>
    );
};

export default Steps;
