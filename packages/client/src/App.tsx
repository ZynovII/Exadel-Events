import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { Router } from './routes';

import './i18n/i18n';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
