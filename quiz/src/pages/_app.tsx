import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../../src/component/navbar"
import {Provider} from "react-redux"
import {store} from "../store/store"
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
// import {quizApi} from "../store/slices/quizSlice"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
       {/* <ApiProvider api={quizApi}> */}
        <NavBar />
        <Component {...pageProps} />
       {/* </ApiProvider> */}
     </Provider>
  );
}

export default MyApp
