import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Components-Header/Header-Component';
import Music_Component from '../Components/Components-Music/Music-Component';
import Footer from '../Components/Components-Footer/Footer-Component';
import BackToTopButton from '../Components/Components-BackToTopButton/BackToTopButton-Component';

function Music_page() {
    return (
      <div className='App'>
        <Header/>
        <Music_Component/>
        <Footer/>
        <BackToTopButton />
      </div>
    );
  }
  
  export default Music_page;