// Components
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import HomeScreen from "./screens/home-screen.component";

// Bootstrap
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <div className="App">
      <Header />
        <main className="py-3">
          <Container>
              <HomeScreen />
          </Container>
        </main>
      <Footer />
    </div>
  ); 
}

export default App;
