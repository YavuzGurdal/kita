import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Uberuns from './components/Uberuns';
import Projekte from './components/Projekte';
import Stellungangebote from './components/Stellungangebote';
import Kontakt from './components/Kontakt';

function App() {
  return (
    <Router>
      <div className="bodyContainer">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/uberuns' element={<Uberuns />} />
          <Route path='/projekte' element={<Projekte />} />
          <Route path='/stellenangebote' element={<Stellungangebote />} />
          <Route path='/kontakt' element={<Kontakt />} />
          {/*     <Route path='/15m' element={<Coin15m />} />
            <Route path='/4h' element={<Coin4h />} /> */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
