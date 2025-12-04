import styles from '../styles.module.scss'
import fbIcon from '@icons/svgs/fbIcon.svg'
import instaIcon from '@icons/svgs/instaIcon.svg'
import ytbIcon from '@icons/svgs/ytbIcon.svg'
import heartIcon from '@icons/svgs/heartIcon.svg'
import reloadIcon from '@icons/svgs/reloadIcon.svg'
import cartIcon from '@icons/svgs/cartIcon.svg'

const BoxIcon = ({type, href}) => {
    const {boxIcon} = styles
    const handleRenderIcon = (type) => {
        switch(type) {
            case 'fb':
                return fbIcon
            case 'ig':
                return instaIcon
            case 'ytb':
                return ytbIcon
            case 'heart':
                return heartIcon
            case 'reload':
                return reloadIcon
            case 'cart':
                return cartIcon
        }
    }
  return (
    <div className={boxIcon}>
        <img src= {handleRenderIcon(type)} alt={type} />
    </div>
  )
}

export default BoxIcon
