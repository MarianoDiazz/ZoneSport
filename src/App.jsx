import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation'
import CarouselHome from './components/CarouselHome';
import BestSeller from './components/BestSeller';
import Marcas from './components/Marcas';

function App() {


  return (
    <div>
      <Navigation />
      <CarouselHome />

      <main>
        <BestSeller />
        <Marcas />
      </main>
    </div>
  )
}

export default App
