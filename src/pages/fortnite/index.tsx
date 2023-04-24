import styles from './style.module.scss'

export default function Fortnite() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h5 className={styles['fortnite-font']}>Em breve</h5>
                <h1 className={styles['fortnite-font']}>Fortnite!</h1>
            </div>
        </div>
    )
}
