import styles from '../../styles.module.scss';
import classNames from 'classnames';


const Stepper = ({number, content, isDisable}) => {
    const { stepper, numberStep, textStep, isDisableNumber, isDisableText } = styles;
  return (
    <div className={stepper}>
          <div className={classNames(numberStep, {[isDisableNumber]: isDisable})}>{number}</div>
          <div className={classNames(textStep, { [isDisableText]: isDisable })}>{content}</div>
    </div>
  )
}

export default Stepper
