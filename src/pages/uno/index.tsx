import Image from 'next/image'
import imgUno from '../../../public/uno.jpg'
import styles from './styles.module.scss'

export default function Uno() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                {' '}
                <Image
                    src={imgUno}
                    alt={'Uno'}
                    width={1500}
                    height={undefined}
                />
            </div>
        </div>
    )
}
