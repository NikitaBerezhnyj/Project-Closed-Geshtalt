import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Components-Header/Header-Component';
import Comics_Component from '../Components/Components-Comics/Comics-Component';
import Footer from '../Components/Components-Footer/Footer-Component';
import BackToTopButton from '../Components/Components-BackToTopButton/BackToTopButton-Component';

function Comics_page() {
    return (
      <div className='App'>
        <Header/>
        <Comics_Component/>
        <Footer/>
        <BackToTopButton />
      </div>
    );
  }
  
  export default Comics_page;