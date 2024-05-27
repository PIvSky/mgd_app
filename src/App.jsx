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
// styles

import './App.scss'

const websiteRoutes = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <Home />},
      { path: '/about', element: <About/>},
      { 
        path: '/offer', 
        element: <Offer/>, 
        children : [
          { path: '/new-business', element: <NewBiz/>},
          { path: '/existing-business', element: <ExistBiz/>},
          { path: '/modern-business-tools', element: <BizTools />},
          { path: '/market-research', element: <Research />},
          { path: '/project-manager', element: <ProjectMan />},
      ],},
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