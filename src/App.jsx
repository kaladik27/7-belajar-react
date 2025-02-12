import './App.css'
import { Button } from "./button"
import { Alert } from "./Alert"
import { Foster } from './Foster'



function Judul() {
  return <h1> welcome to paradise
  </h1>

}






function App() {
  return (
    <>
      <div className='grid place-content-center h-screen '>
        <Judul></Judul>
      </div>
      <div className='grid place-content-center '>
        <Alert></Alert>
        <Button variant="primary" >login</Button>
        <br />
        <div className='flex'>

          <Alert></Alert>
          <Button variant="primary" >login</Button>

        </div>
        <br />
        <div>
          <Foster></Foster>
        </div>
      </div>
    </>


  )
}

export default App;
