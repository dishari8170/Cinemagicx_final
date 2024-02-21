import '@/styles/globals.css'

export default function App({ Component, pageProps }) {


  return <>
<div className="vh-100 vw-100 align-items-center justify-content-center  position-fixed bg-black text-black z-n1 opacity-75" id="loadingx" style={{display:"none"}}>


    <img src="/loading.gif" alt=""/>

    
</div>

    {/*<Script src="/bootstrap.bundle.js"/>*/}
    <Component {...pageProps} />

    </>
}
