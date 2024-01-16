import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_Component from '../../Components/Components-Header/Header_Component';
import UnderHome_Component from '../../Components/Components-Game/UnderHome_Components/UnderHome_Component';
import Footer_Component from '../../Components/Components-Footer/Footer_Component';
import BackToTopButton_Component from '../../Components/Components-BackToTopButton/BackToTopButton_Component';

export default function UnderHome_Page() {
  return (
    <div className='App'>
      <Header_Component/>
      <UnderHome_Component/>
      <Footer_Component/>
      <BackToTopButton_Component />
    </div>
  );
}