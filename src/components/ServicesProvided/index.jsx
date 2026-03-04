import styles from "./styles.module.css";

export default function ServicesProvided({
  className,
  slideInRight,
  toAppear,
}) {
  return (
    <section id="services" className={styles.services}>
      <h2 className={`${styles.title} ${className}`}>Serviços</h2>

      <h3 className={`${styles.subtitle} ${slideInRight}`}>
        Transporte Turístico
      </h3>
      <p className={`${styles.text} ${toAppear} `}>
        Passeios e excursões para cidades turísticas, pontos de interesse e
        eventos.
      </p>

      <h3 className={`${styles.subtitle} ${slideInRight}`}>
        Excursões Escolares
      </h3>
      <p className={`${styles.text} ${toAppear} `}>
        Transporte seguro para escolas em viagens, passeios e eventos.
      </p>

      <h3 className={`${styles.subtitle} ${slideInRight}`}>
        Serviço Personalizado
      </h3>
      <p className={`${styles.text} ${toAppear} `}>
        Planejamento de rotas e horários de acordo com as necessidades do
        cliente.
      </p>

      <h3 className={`${styles.subtitle} ${slideInRight}`}>
        Aluguel de Veículos com Motorista
      </h3>
      <p className={`${styles.text} ${toAppear} `}>
        Para viagens personalizadas ou passeios privados.
      </p>
    </section>
  );
}
