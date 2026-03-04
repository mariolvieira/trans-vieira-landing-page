import styles from "./styles.module.css";

export default function Contact({ toAppear }) {
  return (
    <section id="contact" className={`${styles.contact} ${toAppear}`}>
      <h2 className={styles.title}>Contato</h2>
      <address>
        <p className={styles.address}>
          <strong>Endereço:</strong> Rua xxxxxxxx, 123 – Centro, xxxxxxx – MG
        </p>
        <p className={styles.telephone}>
          <strong>Telefone:</strong> (15) 1234-5678
        </p>
        <p className={styles.email}>
          <strong>E-mail:</strong> contato@transporteexemplo.com.br
        </p>
        <p className={styles.openingHours}>
          <strong>Horário:</strong> Seg a Sex: 08:00 – 18:00
          <br />
          Sáb: 08:00 – 12:00
        </p>
      </address>
      <nav className={styles.socials}>
        <a
          className={styles.link}
          href="https://www.facebook.com/?locale=pt_BR"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          className={styles.link}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className={styles.link}
          href="https://www.linkedin.com/learning/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
      <h4 className={styles.subtitle}>Envie uma mensagem</h4>
      <form className={styles.contactForm}>
        <label className={styles.label} htmlFor="fullName">
          Nome Completo
        </label>
        <input
          className={styles.input}
          type="text"
          id="fullName"
          placeholder="Nome Completo"
          required
        />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          placeholder="Email: email@exemplo.com"
          required
        />
        <label className={styles.label} htmlFor="message">
          Sua mensagem
        </label>
        <textarea
          id="message"
          className={styles.textarea}
          placeholder="Sua mensagem"
          required
        ></textarea>
        <button className={styles.buttonToSend} type="submit">
          Enviar
        </button>
      </form>
    </section>
  );
}
