import styles from '../styles/Cards.module.css'
import { FaGithub, FaDiscord, FaInstagram } from 'react-icons/fa'
import { BsBook, BsInfoCircle } from 'react-icons/bs'

export default function DocumentationCards() {
  return (
    <div className={styles.grid}>
      <a href="https://docs.uniswap.org/" className={styles.card}>
        <div className={styles.row}>
          <BsBook />↗
        </div>
        <h3>Arkane Documentation</h3>
        <p>Learn about the Arkane.</p>
      </a>


      <a href="https://instagram.com/thearkane.space" className={styles.card + ' ' + styles.external}>
        <div className={styles.row}>
          <FaInstagram className={styles.logo} fill="#8c9eff" />
          <div className={styles.column}>
            <h3>Instagram</h3>
            <p>Follow our instagram for more information.</p>
          </div>
        </div>
      </a>

      <a href="https://discord.gg/ybKVQUWb4s" className={styles.card + ' ' + styles.external}>
        <div className={styles.row}>
          <FaDiscord className={styles.logo} fill="#8c9eff" />
          <div className={styles.column}>
            <h3>Discord</h3>
            <p>Join the community.</p>
          </div>
        </div>
      </a>

      <a
        href="https://github.com/gracexn"
        className={styles.card + ' ' + styles.external}
      >
        <div className={styles.row}>
          <FaGithub className={styles.logo} />
          <div className={styles.column}>
            <h3>GitHub</h3>
            <p>Wanna help us grow..?</p>
          </div>
        </div>
      </a>
    </div>
  )
}
