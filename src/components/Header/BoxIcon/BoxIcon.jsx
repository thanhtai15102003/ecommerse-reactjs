import styles from '../styles.module.scss'

const BoxIcon = ({type, href}) => {
    const {boxIcon} = styles
  return (
    <div className={boxIcon}>
        {type}
    </div>
  )
}

export default BoxIcon
