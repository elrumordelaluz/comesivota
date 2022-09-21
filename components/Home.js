import Image from 'next/image'
import CountdownComponent from './Countdown'
import schedaNome from '../public/img/scheda_nome.png'
import schedaSimbolo from '../public/img/scheda_simbolo.png'
import schedaSimboloNome from '../public/img/scheda_nome_e_simbolo.png'
import schedaSimboloElenco from '../public/img/scheda_simbolo_elenco.png'
import schedaNulla from '../public/img/scheda_nulla.png'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <CountdownComponent />
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Dove si vota?</h2>
        <p className={styles.text}>
          Ogni cittadino vota <strong>nel proprio Comune di residenza</strong>.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Chi può votare?</h2>
        <p className={styles.text}>
          Tutti i cittadini italiani che abbiano{' '}
          <strong>compiuto i 18 anni al 25 settembre</strong> e che godano dei
          diritti civili e politici.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Che documenti servono per votare?</h2>
        <p className={styles.text}>
          La <strong>tessera elettorale</strong> e un{' '}
          <strong>documento di identità</strong>.
        </p>
        <p className={styles.text}>
          <small>
            Il documento è valido anche se scaduto. La tessera elettorale deve
            avere almeno uno spazio disponibile per apporre il timbro del voto.
          </small>
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>È obbligatorio andare a votare? </h2>
        <p className={styles.text}>
          No, il voto non è un dovere, ma <strong>un diritto</strong>.
        </p>
      </div>

      <div className={styles.section}>
        <p className={styles.text}>arriviamo al dunque</p>
        <h1 className={styles.title}>Come si vota? </h1>
        <p className={styles.text}>
          Ogni cittadino avrà <strong>due schede</strong> per votare:
          <br />
          una <strong style={{ color: '#fbb2e0' }}>scheda rosa</strong> per la
          Camera dei Deputati e<br /> una{' '}
          <strong style={{ color: '#fecc4f' }}>scheda gialla</strong> per il
          Senato
        </p>
      </div>
      <div className={styles.section}>
        <p className={styles.text}>In ogni scheda</p>
        <h2 className={styles.subtitle}>
          Si deve tracciare <strong>una sola "x"</strong>{' '}
        </h2>
        <p className={styles.text}>
          <strong>scegliendo una delle opzioni</strong> descritte in seguito:
        </p>
        <p className={styles.text}>
          <small>
            (la procedura è la stessa per sia per la scheda rosa che per quella
            gialla)
          </small>
        </p>

        <div className={styles.section}>
          <p className={styles.text}>
            Sul <strong>nome del candidato</strong> al collegio uninominale
          </p>
          <Image src={schedaNome} />
          <p className={styles.text}>
            <small>
              Questi voti vengono ripartiti tra le liste in coalizione in
              proporzione ai voti ottenuti dal candidato al collegio uninominale
            </small>
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.text}>
            Sul <strong>simbolo del partito</strong> scelto
          </p>
          <Image src={schedaSimbolo} />
          <p className={styles.text}>
            <small>
              Il voto si estende automaticamente per il candidato al collegio
              uninominale collegato alla lista
            </small>
          </p>
        </div>

        <div className={styles.section}>
          <p className={styles.text}>
            Sul <strong>simbolo</strong> del partito{' '}
            <strong>e sul candidato</strong> all’uninominale
          </p>
          <p className={styles.text}>oppure</p>
          <p className={styles.text}>
            Sul <strong>simbolo</strong> del partito{' '}
            <strong>e sull’elenco dei candidati </strong>
          </p>
          <Image src={schedaSimboloNome} />
          <Image src={schedaSimboloElenco} />
          <p className={styles.text}>
            <small>
              Il voto sarà considerato a favore sia della lista dei candidati al
              plurinominale, sia del candidato uninominale.
            </small>
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Non è previsto il voto disgiunto</h2>
          <Image src={schedaNulla} />
          <p className={styles.text}>
            <small>
              Se si traccia un segno sul nome del candidato al collegio
              uninominale e un altro segno sul simbolo di una lista alla quale
              il candidato non è collegato, il voto risulta nullo
            </small>
          </p>
        </div>
      </div>
    </div>
  )
}
