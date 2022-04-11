import React from 'react'
import { useEffect } from 'react'
import Alert from './Alert'

export const AlertsContainer = ({ alerts, setAlerts, style }) => {

  return (
    <>
      {alerts.length > 0 &&
        <div className="alert-container">
          {alerts.map((el) => {
            return <Alert
              type={el.type}
              text={el.text}
              alerts={alerts}
              setAlerts={setAlerts}
              id={el.id}
              key={el.id}
              style={style}
            />
          })}
        </div>
      }
    </>
  )
}