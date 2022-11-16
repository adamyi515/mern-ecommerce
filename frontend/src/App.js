// Components
import Header from "./components/header.component";
import Footer from "./components/footer.component";

// Pages/Screens
import HomeScreen from "./screens/home-screen.component";
import ProductScreen from './screens/product-screen.component';

// Bootstrap
import { Container } from 'react-bootstrap';

// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <main className="py-3">
          <Container>
              <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/product/:id' element={<ProductScreen />} />
              </Routes>
          </Container>
        </main>
      <Footer />
    </BrowserRouter>
  ); 
}

export default App;
