import Header from './modules/common/Header/D6_SL_Header'
import Drawer from './modules/common/Header/D6_SL_Drawer'
import Routes from './Routes'
import AF from './modules/common/AboveFooter/D6_SL_AF'
import Footer from './modules/common/Footer/D6_SL_Footer'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/> 
      <Drawer/>
      <Routes/>
      <AF/>
      <Footer/>
    </BrowserRouter> 
    </>
  );
}

export default App;
