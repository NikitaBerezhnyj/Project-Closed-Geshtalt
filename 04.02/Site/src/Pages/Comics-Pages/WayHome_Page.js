import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_Component from '../../Components/Components-Header/Header_Component';
import WayHome_Component from '../../Components/Components-Comics/WayHome_Components/WayHome_Component';
import Footer_Component from '../../Components/Components-Footer/Footer_Component';
import BackToTopButton_Component from '../../Components/Components-BackToTopButton/BackToTopButton_Component';

export default function WayHome_Page() {
    return (
      <div className='App'>
        <Header_Component/>
        <WayHome_Component/>
        <Footer_Component/>
        <BackToTopButton_Component />
      </div>
    );
  }