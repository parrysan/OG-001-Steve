import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Clients from './pages/Clients';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import DesignSystem from './pages/DesignSystem';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
