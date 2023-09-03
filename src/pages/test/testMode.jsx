import React, { useEffect } from 'react'
import mode from '../../helpers/themeMode'

function testMode() {

    useEffect = () => {
        mode();
    }
  return (
    <div>
        <h1>Test Theme Mode</h1>
          <p>{}</p>  
    </div>
  )
}

export default testMode