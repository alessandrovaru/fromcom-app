import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.logoAnimationContainer}>
       <Image className='img-fluid' src='/logos/fdo1.gif' width={1280} height={720}/>
      </div>
      <div className={styles.descriptionContainer}>
        <h2>We create content for the largest minority:</h2>
        <h3>WOMEN</h3>
      </div>
      <div className={styles.email}>
        <a href='mailto:hello@thefromcompictures.com'><p>hello@thefromcompictures.com</p></a>
      </div>
    </main>
  )
}
