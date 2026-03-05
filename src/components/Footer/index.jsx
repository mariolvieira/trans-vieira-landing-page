import styles from "./styles.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {currentYear} | <strong>Mário Vieira - </strong>
        <a className={styles.link} href="mailto:mariolenilson@gmail.com">
          mariolenilson@gmail.com
        </a>
      </p>
      <p className={styles.disclaimer}>
        Este é um projeto acadêmico para fins de portfólio. As informações e
        serviços aqui apresentados são fictícios.
      </p>
    </footer>
  );
}
