import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation'
import CarouselHome from './components/CarouselHome';
import BestSeller from './components/BestSeller';

function App() {


  return (
    <div>
      <Navigation />
      <CarouselHome />

      <main>
        <BestSeller />
      </main>
    </div>
  )
}

export default App
