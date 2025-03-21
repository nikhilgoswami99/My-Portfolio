import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/homepage/home.jsx'
import About from './pages/about/about.jsx'
import Resume from './pages/resume/resume.jsx'
import Projects from './pages/projects/projects.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'resume',
                element: <Resume />
            }
        ]
    }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
