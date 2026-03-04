import logo from "../../assets/logo.png";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo da Empresa" />
      <nav className={styles.mainNav}>
        <a className={styles.link} href="#home">
          Início
        </a>
        <a className={styles.link} href="#company-description">
          Sobre Nós
        </a>
        <a className={styles.link} href="#services">
          Serviços
        </a>
        <a className={styles.link} href="#contact">
          Contato
        </a>
      </nav>
    </header>
  );
}
