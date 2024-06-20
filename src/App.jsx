import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// components
import RootLayout from '../src/components/RootLayout/RootLayout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Offer from './components/Offer/Offer';
import SuccesStory from './components/SuccesStory/SuccesStory';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import NewBiz from './components/Offer/NewBiz/NewBiz';
import BizTools from './components/Offer/BizTools/BizTools';
import ExistBiz from './components/Offer/ExistBiz/ExistBiz';
import Research from './components/Offer/Research/Research';
import ProjectMan from './components/Offer/ProjectMan/ProjctMan';
import Footer from './components/Footer/Footer';
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
      { path: '/offer/new-business', element: <NewBiz/>},
      { path: '/offer/existing-business', element: <ExistBiz/>},
      { path: '/offer/modern-business-tools', element: <BizTools />},
      { path: '/offer/market-research', element: <Research />},
      { path: '/offer/project-manager', element: <ProjectMan />},
      { path: '/success-story', element: <SuccesStory/>},
      { path: '/blog', element: <Blog/>},
      { path: '/contact', element: <Contact/>}
    ],
  }
])



function App() {
  return (
    <div className='app'>
      <RouterProvider router={websiteRoutes}></RouterProvider>
      <Footer />
    </div>
  );
}

export default App;