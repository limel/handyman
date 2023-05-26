import Header from '../components/Header';
import Footer from '../components/Footer';

const Applayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Applayout;
