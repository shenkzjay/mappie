import Home from "../pages/Home"
import MarketEntry from "./MarketEntry";
import Digitalmedia from "./Digitalmedia";
import Mktassess from "./Mktassess";
// import Head from "next/head"

// import styles from '../styles/Home.module.css'

function App() {
 return(
  <div>
  {/* <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    </Head> */}
  <Home />
  <MarketEntry />
  <Digitalmedia />
  <Mktassess />
  </div>
  )
}
export default App;