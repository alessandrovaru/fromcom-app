import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logoAnimationContainer}>
        Video
      </div>
      <div className={styles.descriptionContainer}>
        <h2>We create content for the largest minority:</h2>
        <h3>WOMEN</h3>
      </div>
      <div className={styles.email}>
        <a href='#'>hello@thefromcompictures.com</a>
      </div>
    </main>
  )
}
