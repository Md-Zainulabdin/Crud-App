import Navbar from './components/Navbar/page'
import Footer from './components/footer/page'
import { ToastContainer } from './nexttoast'
import 'react-toastify/dist/ReactToastify.css';
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Crud App',
  description: 'Create by ~ Zain-ul-Abdin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative`} >
        <ToastContainer />
        <Navbar />
        <div className='mt-8  px-[20px] md:px-[50px]'>
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
