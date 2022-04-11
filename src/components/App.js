import { useState } from 'react'
import '../css/main.css'
import Navbar from "./Navbar"
import { newAlert } from './Alert/Utils'
import { AlertsContainer } from './Alert/AlertsContainer'

const App = () => {
  const [alerts, setAlerts] = useState([]);
  const addAlert = newAlert(alerts, setAlerts);

  return (
    <>
    <Navbar />
    <div className="container-main">
    <button onClick={() => addAlert("success", "test")}>1</button>
    </div>
    <AlertsContainer alerts={alerts} setAlerts={setAlerts} style={{}}/>
    </>
  )
}

export default App


