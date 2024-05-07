import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// components
import RootLayout from '../src/components/RootLayout/RootLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Offer from './components/Offer/Offer';
import SuccesStory from './components/SuccesStory/SuccesStory';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog'
// styles

import './App.scss'

const websiteRoutes = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <Home />},
      { path: '/about', element: <About/>},
      { path: '/offer', element: <Offer/>},
      { path: '/succes-story', element: <SuccesStory/>},
      { path: '/blog', element: <Blog/>},
      { path: '/contact', element: <Contact/>}
    ],
  }
])

function App() {
  return (
    <RouterProvider router={websiteRoutes}></RouterProvider>
  );
}

export default App;