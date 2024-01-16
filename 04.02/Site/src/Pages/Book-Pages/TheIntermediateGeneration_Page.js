import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_Component from '../../Components/Components-Header/Header_Component';
import TheIntermediateGeneration_Component from '../../Components/Components-Book/TheIntermediateGeneration_Components/TheIntermediateGeneration_Component';
import Footer_Component from '../../Components/Components-Footer/Footer_Component';
import BackToTopButton_Component from '../../Components/Components-BackToTopButton/BackToTopButton_Component';

export default function TheIntermediateGeneration_Page() {
    return (
      <div className='App'>
        <Header_Component/>
        <TheIntermediateGeneration_Component/>
        <Footer_Component/>
        <BackToTopButton_Component />
      </div>
    );
  }