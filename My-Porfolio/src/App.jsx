import styles from './App.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'


function App() {

  return (
    <>
    <Navbar></Navbar>
    <main className={styles.dynamic_content}>
    <Outlet></Outlet>
    </main>
    <Footer></Footer>
    </>
  )
}

export default App
