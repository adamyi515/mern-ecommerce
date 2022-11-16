// Components
import Header from "./components/header.component";
import Footer from "./components/footer.component";

// Bootstrap
import { Container } from 'react-bootstrap';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <main>
          <h1>APP js</h1>
        </main>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
