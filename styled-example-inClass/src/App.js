import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
const style ={
  colors:{
    header:"#fff",
    body:"#eee",
    footer:"#8A1C4A"
  },
  margins:{},
  "max-width": "1000px",
  width:"95vw",
  responsive:"768px",
};

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles/>
    <Header/>
    <Card/>
    <Footer/>
    </ThemeProvider>
  );
}

export default App