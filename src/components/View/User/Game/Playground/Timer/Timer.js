import { useEffect, useState } from 'react';
import './Timer.css';

const Timer = (props) => {
    const [time, setTime] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            if(time === 0 || props.stop) {
                clearInterval(interval);
                props.timeOut(time, setTime);
                return;
            }

            setTime(time - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time, props]);

    return (
        <div className='Timer'>{time}</div>
    );
}

export default Timer;
