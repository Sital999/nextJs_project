import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../../src/component/navbar"
import {Provider} from "react-redux"
import {store} from "../store/store"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <NavBar/>
      <Component  {...pageProps} />
    </Provider>
  );
}

export default MyApp
