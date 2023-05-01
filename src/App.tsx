import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { SingleIngredient } from './pages/SingleIngredient';
import ScrollToTop from './utils/ScrollToTop';
import {Footer} from "./components/Footer";
import TransparentImageBox from "./components/TransparentImageBox";
import {Ingredients} from "./pages/Ingredients";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/ingredients" element={<Ingredients />} />
				<Route path="/ingredients/:ingredientName" element={<SingleIngredient />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<TransparentImageBox />
			<Footer />
		</Router>
    </>
  )
}

export default App
