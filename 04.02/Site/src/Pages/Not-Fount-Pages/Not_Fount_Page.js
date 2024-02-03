import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header_Component from '../../Components/Components-Header/Header_Component';
import Not_Fount_Component from '../../Components/Component-NotFound/Not_Fount_Component';
import Footer_Component from '../../Components/Components-Footer/Footer_Component';
import BackToTopButton_Component from '../../Components/Components-BackToTopButton/BackToTopButton_Component';

export default function Not_Fount_Page() {
    return (
      <div className='App'>
        <Header_Component/>
        <Not_Fount_Component/>
        <Footer_Component/>
        <BackToTopButton_Component />
      </div>
    );
  }