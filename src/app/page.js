import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logoAnimationContainer}>
       <Image className='img-fluid' priority src='/logos/fdo1.gif' width={1280} height={720} alt='The F* Rom Com Pictures'/>
      </div>
      <div className={styles.revealContainer}>
        <div className={styles.descriptionContainer}>
          <h2>We create content for the largest minority:</h2>
          <h3>WOMEN</h3>
        </div>
        <div className={styles.email}>
          <a href='mailto:hello@thefromcompictures.com'><p>hello@thefromcompictures.com</p></a>
        </div>
      </div>
    </main>
  )
}
