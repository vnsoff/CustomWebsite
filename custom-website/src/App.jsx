import styles from "./style";
import { Navbar,  Articles,  Button,  Company,  Contact,
  Hero,  Mission,  Solutions,  
  Services,  RemoteSupport, Footer} from  './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Company />
        <Mission />
        <Services />
        <Solutions />
        <RemoteSupport />
        <Articles />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;