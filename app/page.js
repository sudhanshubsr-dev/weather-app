'use client'
import Main from '../app/components/Main.jsx'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Preloader from './components/Preloader.jsx';
export default function Home() {
  return (
  <>
 
    <Main />
    <ToastContainer />
    <Preloader />
  </>
  
  )
}
