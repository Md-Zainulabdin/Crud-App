import Navbar from './components/Navbar/page'
import Footer from './components/footer/page'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Crud-Application',
  description: 'Create by ~ Zain-ul-Abdin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} relative`} >
        <head>
          <link rel="shortcut icon" href="/check.png" type="image/x-icon" />
          <title>Crud-Application</title>
        </head>
        <Navbar />
        <div className='mt-8  px-[20px] md:px-[50px]'>
          {children}
        </div>
        <footer className='w-full fixed bottom-0 left-0'>
          <Footer />
        </footer>
      </body>
    </html>
  )
}
