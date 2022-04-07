import { useState, useEffect } from 'react'
import '../css/main.css'
import Navbar from "./Navbar"
import Alert from './Alert'

// TODO SetInterval to delete alerts
// TODO make another function to delete alerts with timer

let id = 0;

const App = () => {
  const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if(alerts.length > 0) {
                // ! After importing React Redux add animation out
                // ? By sending alerts state in Alert.js
                clearAlert(alerts[0].id)
            }
        }, 3000);
        return () => {
            clearInterval(interval);
        }
    }, [alerts]); // eslint-disable-line react-hooks/exhaustive-deps


    
    const addAlert = (type, text) => {
        setAlerts([
            ...alerts, 
            {
            id: id, 
            text: `${text}-${alerts.length}`, 
            type: type, 
        }])
        id++;

    }

    const clearAlert = async (id) => {
        setAlerts (
            alerts.filter((el) => {
                return el.id !== id;
            })
        )
        id--;
    }

  return (
      <>
    <Navbar />



    <div className="container-main">
    {/* Main Section */}
    

    <button onClick={() => addAlert("warning", "test")}>1</button>

    {/* Main Section */}
    </div>


    {/* Alerts */}
    {
    alerts.length > 0 &&
    <div className="alert-container">
        {alerts.map((el) => {
            console.log(el);
            return (
            <Alert key={el.id} type={el.type} text={el.text} onDelete={() => {clearAlert(el.id)}}/>
            )
        })}
    </div>
    }
      </>
  )
}

export default App