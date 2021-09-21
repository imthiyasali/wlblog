import Link from 'next/link'

const Navigation = ({ locale, locales }) => {
  const resolveHome = {
    en: 'Home',
    es: 'Página principal',
  }
  const resolveAbout = {
    en: 'About',
    es: 'Acerca',
  }
 
  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
  <header className="w-full bg-white">
    <nav className="" role="navigation">
      <div className="container mx-auto py-8 flex flex-wrap items-center space-between md:flex-no-wrap">
        <div className="mr-4 md:mr-8">
          <a  href={`${defaultLocale}`}>
          <img src='https://websitelearners.com/content/uploads/2016/09/logo.svg' className='logoimg' />
            </a>
        </div>
       
        <div className="  md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded"
            type="button"
          >
            <svg
              className="h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>


         <div className="    md:flex-grow md:flex md:items-center">
          <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 md:ml-auto lg:mr-8 md:border-0">
            <li className='navli'>
              <a href={`${defaultLocale}about`} className="block px-4 py-1 md:px-7 ">Courses</a>
            </li>
              <li className='navli'>
              <a href={`${defaultLocale}about`} className="block px-7 py-1 md:px-7">Shop</a>
            </li>
              <li className='navli'>
              <a href={`${defaultLocale}about`} className="block px-7 py-1 md:px-7">Tools</a>
            </li>
       
            
            <li className='navli'>
            <Link href={`${defaultLocale}blog`}>
              <a  className="block px-7 py-1 md:px-7">Blog</a>
              </Link>
            </li>
             <li className='navli'>
              <a href={`${defaultLocale}about`} className="block px-7 py-1 md:px-7">{resolveAbout[locale]}</a>
            </li>
              
   </ul>
          </div>

        <div className=" md:flex-grow md:flex md:items-center">
          <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0   md:ml-auto  md:border-0">
            <li className='navli'>
              <a href={`${defaultLocale}`} className="block   py-1 md:p-2 ">Login</a>
            </li>
            
          </ul>

{false && 

          <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:border-0">
          {
          locales.map(loc => {
            return(<li key={loc}>
              <a href={`/${loc}`} className={`block px-4 py-1 md:p-2 rounded-lg lg:px-4 
                ${locale === loc ? "bg-black text-white" : ""}`}>{loc}</a>
            </li>)
          })
          }
          </ul>
          }
        </div>
      </div>
    </nav>
  </header>
)}

export default Navigation
