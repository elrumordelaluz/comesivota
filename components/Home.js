import Image from 'next/image'
import dynamic from 'next/dynamic'
import schedaNome from '../public/img/scheda_nome.png'
import schedaSimbolo from '../public/img/scheda_simbolo.png'
import schedaSimboloNome from '../public/img/scheda_nome_e_simbolo.png'
import schedaSimboloElenco from '../public/img/scheda_simbolo_elenco.png'
import schedaNulla from '../public/img/scheda_nulla.png'
import styles from '../styles/home.module.css'
import ShareIcon from './icons/Share'

const Countdown = dynamic(() => import('./Countdown'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <Countdown />
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
          Puoi votare se hai la cittadinanza italiana e
          <br /> hai <strong>compiuto i 18 anni entro il 25 settembre</strong>.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>Cosa devi portare per votare?</h2>
        <p className={styles.text}>
          La <strong>tessera elettorale</strong> e un{' '}
          <strong>documento di identità</strong>.
        </p>
        <p className={styles.text}>
          <small>
            La matita da utilizzare è fornita dal personale presente nel seggio.
          </small>
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subtitle}>È obbligatorio andare a votare? </h2>
        <p className={styles.text}>
          No, il voto non è un dovere, ma{' '}
          <strong style={{ fontSize: '1.2em' }}>un diritto</strong>.
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
        <h2 className={styles.subtitle}>
          Si deve tracciare <strong>una sola &quot;x&quot;</strong>{' '}
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
            <strong>e sul candidato</strong> all&quot;uninominale
          </p>
          <p className={styles.text}>oppure</p>
          <p className={styles.text}>
            Sul <strong>simbolo</strong> del partito{' '}
            <strong>e sull&quot;elenco dei candidati </strong>
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

        <div className={styles.section}>
          <h2 className={styles.subtitle}>Approfondimenti</h2>

          <p className={styles.text}>
            Di seguito alcuni link dove consultare le fonti delle informazioni
            presenti su questa pagina oltre a diversi approfondimenti.
          </p>

          <a
            href="https://dait.interno.gov.it/elezioni/trasparenza/elezioni-politiche-2022"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <ShareIcon className={styles.icon} />
            Elezioni trasparenti (DAIT)
          </a>
          <br />
          <a
            href="https://dait.interno.gov.it/elezioni/faq-elezioni-politiche-2022"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <ShareIcon className={styles.icon} />
            FAQ. Elezioni politiche 2022 (DAIT)
          </a>
          <br />
          <a
            href="https://elezioni.interno.gov.it/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <ShareIcon className={styles.icon} />
            Eligendo. Il sistema integrato di diffusione dei dati elettorali
          </a>
        </div>
      </div>
    </div>
  )
}
