import { Link } from "react-router-dom";
import { toast } from 'react-toastify'; 
import "react-toastify/dist/ReactToastify.css";
import { MainContainer, H1, Paragraph, Button } from './MainPageStyles';

export default function MainPage() {
  const notify = () => {
    toast.success("Pizzanı seç!", {
      position: "top-right"
    });
  };

  return (
    <>
      <MainContainer>
        <H1>Teknolojik Yemekler</H1>
        <Paragraph>KOD ACIKTIRIR,<br/>PİZZA DOYURUR</Paragraph>
        <Link to="/orderform">
          <Button onClick={notify}>ACIKTIM</Button>
        </Link>
      </MainContainer>
    </>
  );
}

