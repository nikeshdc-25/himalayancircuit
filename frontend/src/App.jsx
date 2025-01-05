import { Col, Container, Row } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReasonToChooseUs from "./components/ReasonToChooseUs";
import SocialPartner from "./components/SocialPartner";


function App() {
  return (
    <>
    <Header />
    <Container className="my-3">
      <Outlet/>
    </Container>
    <ReasonToChooseUs />
    <Footer className='mt-5'/>
    <SocialPartner />
    <ToastContainer />
    </>
  )
}

export default App
