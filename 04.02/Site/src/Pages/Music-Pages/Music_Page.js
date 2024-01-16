import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_Component from '../../Components/Components-Header/Header_Component';
import Music_Component from '../../Components/Components-Music/Music-Component';
import Footer_Component from '../../Components/Components-Footer/Footer_Component';
import BackToTopButton_Component from '../../Components/Components-BackToTopButton/BackToTopButton_Component';

export default function Music_Page() {
    return (
      <div className='App'>
        <Header_Component/>
        <Music_Component/>
        <Footer_Component/>
        <BackToTopButton_Component />
      </div>
    );
  }