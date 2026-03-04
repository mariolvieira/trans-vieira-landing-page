import driver from "../../assets/driver-on-the-bus.png";
import passengers from "../../assets/passengers-in-the-van.png";
import styles from "./styles.module.css";

// Imagens ilustrativas geradas via IA (Google Gemini) para fins demonstrativos.
export default function CompanyDescription({ slideInLeft, slideInRight }) {
  return (
    <section id="company-description" className={styles.companyDescription}>
      <div className={styles.containerAboutUs}>
        <div className={styles.containerAboutUsText}>
          <h2 className={`${styles.title} ${slideInLeft}`}>Sobre Nós</h2>
          <p className={`${styles.aboutUsText} ${slideInLeft}`}>
            A Trans Vieira é uma empresa especializada em transporte de
            passageiros com foco em turismo, fretamento corporativo e transporte
            escolar. Fundada em xxxx, temos mais de xx anos de experiência
            oferecendo segurança, conforto e pontualidade para nossos clientes.
          </p>
        </div>
        <div className={styles.containerAboutUsImg}>
          <img
            src={driver}
            className={`${styles.aboutUsImg} ${slideInRight}`}
            alt="motorista no onibus"
          />
        </div>
      </div>
      <div className={styles.containerOurMission}>
        <div className={styles.containerOurMissionImg}>
          <img
            src={passengers}
            className={`${styles.ourMissionImg} ${slideInRight}`}
            alt="passageiros"
          />
        </div>
        <div className={styles.containerOurMissionText}>
          <h3
            className={`${styles.subtitle} ${styles.subtitleOurMission} ${slideInRight}`}
          >
            Nossa Missão
          </h3>
          <p className={`${styles.ourMissionText}  ${slideInRight}`}>
            Oferecer soluções de transporte de qualidade, com atendimento
            personalizado e atenção às necessidades de cada cliente.
          </p>
        </div>
      </div>
      <div className={styles.vision}>
        <h3 className={`${styles.subtitle} ${slideInRight}`}>Nossa Visão</h3>
        <ul>
          <li>
            Ser reconhecida por oferecer transporte confiável e agradável para
            todos os clientes.
          </li>
          <li>
            Proporcionar viagens seguras e confortáveis, conquistando a
            confiança de quem nos escolhe.
          </li>
          <li>
            Ser a escolha preferida de passageiros que buscam qualidade e
            segurança no transporte.
          </li>
        </ul>
      </div>

      <div className={styles.values}>
        <h3 className={`${styles.subtitle} ${slideInRight}`}>Nossos Valores</h3>
        <ul>
          <li>
            Segurança: todos os nossos veículos passam por manutenção rigorosa e
            inspeções periódicas.
          </li>
          <li>
            Conforto: frota moderna, com ar-condicionado, poltronas reclináveis
            e Wi-Fi em alguns veículos.
          </li>
          <li>Pontualidade: compromisso com horários e rotas planejadas.</li>
          <li>
            Sustentabilidade: práticas conscientes para reduzir impactos
            ambientais.
          </li>
        </ul>
      </div>

      <div className={styles.differences}>
        <h3 className={`${styles.subtitle} ${slideInRight}`}>Diferenciais</h3>
        <ul>
          <li>Motoristas treinados e certificados.</li>
          <li>Atendimento 24h para clientes e reservas.</li>
          <li>Rotas personalizadas para grupos, empresas e excursões.</li>
          <li>Frota adaptada para pessoas com mobilidade reduzida.</li>
        </ul>
      </div>
    </section>
  );
}
