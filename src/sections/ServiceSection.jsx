import Service from '../components/Service';
import styles from './static/Services.module.css';

function ServiceSection () {
  const services = [
    {
      title: 'Automação de Processos (RPA)',
      description: 'Simplificação das operações e economia de tempo com soluções de automação personalizadas, eliminando tarefas repetitivas e otimizando o fluxo de trabalho. ',
      // icon: <FaDesktop />,
    },
    {
      title: 'Desenvolvimento Apps Mobile',
      description: 'Criação de aplicativos móveis sob medida, garantindo que cada detalhe seja pensado para oferecer uma experiência intuitiva e agradável ao usuário.',
      // icon: <FaMobileAlt />,
    },
    {
      title: 'Desenvolvimento Web',
      description: 'Criação de presenças digitais poderosas, com sites que combinam funcionalidade e estética, prontos para entregar a melhor experiência ao usuário. ',
      // icon: <FaChartBar />,
    },
    {
      title: 'Backend',
      description: 'Desenvolvimento de sistemas robustos e escaláveis, com foco em segurança e eficiência, utilizando as melhores práticas e frameworks como Django e Flask. ',
      // icon: <FaChartBar />,
    },
    // {
    //   title: 'Machine Learning',
    //   description: 'Implementação de soluções de inteligência artificial, desde a análise de dados até modelos preditivos, ajudando na tomada de decisões mais informadas. ',
    //   // icon: <FaChartBar />,
    // },
  ];

  return (
    <section id="services" className="services">
        <h2>Serviços</h2>
        <div className= {styles.ServiceSection}>
          {services.map((service, index) => (
            <Service key={index} title={service.title} description={service.description} />
          ))}
      </div>
    </section>
  );
}

export default ServiceSection;