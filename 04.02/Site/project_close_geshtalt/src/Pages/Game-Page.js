import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Components/Components-Header/Header-Component';
import Game_Componet from '../Components/Components-Game/Game-Component';
import Footer from '../Components/Components-Footer/Footer-Component';
import BackToTopButton from '../Components/Components-BackToTopButton/BackToTopButton-Component';

function Game_page() {
    return (
      <div className='App'>
        <Header/>
        <Game_Componet/>
        <Footer/>
        <BackToTopButton />
      </div>
    );
  }
  
  export default Game_page;