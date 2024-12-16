import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Home from './pages/Home';
import { Provider } from "@/components/ui/provider";


function App() {

  return (
    <Provider>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </Provider>
  );
}

export default App
