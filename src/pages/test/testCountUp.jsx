import React from 'react'
import CountUp from 'react-countup';

function testCountUp() {
  return (
    <div>
        <CountUp
            start={-875.039}
            end={160527.012}
            duration={2.75}
            separator=" "
            decimals={4}
            decimal=","
            prefix="Ar "
            suffix=" +"
            onEnd={() => console.log('Ended count! 👏')}
            onStart={() => console.log('Started count! 💨')}
            >
            {({ countUpRef, start }) => (
                <div>
                <span ref={countUpRef} />
                <button onClick={start}>Start</button>
                </div>
            )}
        </CountUp>
    </div>
  )
}

export default testCountUp