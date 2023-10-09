import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Components-Header/Header-Component';
import Book_Component from '../Components/Components-Book/Book-Component';
import Footer from '../Components/Components-Footer/Footer-Component';
import BackToTopButton from '../Components/Components-BackToTopButton/BackToTopButton-Component';

function Book_page() {
    return (
      <div className='App'>
        <Header/>
        <Book_Component/>
        <Footer/>
        <BackToTopButton />
      </div>
    );
  }
  
  export default Book_page;