import { InputProvider } from '../src/context/inputContext'
import { SearchProvider } from '../src/context/SearchContext'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (
    <InputProvider>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </InputProvider>
  )
}

export default MyApp
