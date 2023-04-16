import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
    </>
  )
}

export default App
