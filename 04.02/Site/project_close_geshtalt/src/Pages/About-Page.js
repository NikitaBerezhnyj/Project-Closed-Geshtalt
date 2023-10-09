import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Components-Header/Header-Component';
import About_Component from '../Components/Components-About/About-Component';
import Footer from '../Components/Components-Footer/Footer-Component';
import BackToTopButton from '../Components/Components-BackToTopButton/BackToTopButton-Component';

function About_page() {
    return (
      <div className='App'>
        <Header/>
        <About_Component/>
        <Footer/>
        <BackToTopButton />
      </div>
    );
  }
  
  export default About_page;