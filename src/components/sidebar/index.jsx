import styles from './sidebar.module.css';


const Sidebar = () => {
const dashboardContainer = styles.dashboardContainer;

    return (
        <main className={dashboardContainer}>
            <section className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2>Menu</h2>
        </div>
        <div className={styles.sidebarMenu}>
          <ul>
            <li><a href="#" className={styles.active}>Visão Geral</a></li>
            <li><a href="#">Vendas</a></li>
            <li><a href="#">Ocupação</a></li>
            <li><a href="#">Bomboniere</a></li>
            <li><a href="#">Funcionários</a></li>
          </ul>
        </div>
      </section>
        </main>
        
    );
    };

export default Sidebar;