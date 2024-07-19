import { useState  } from "react";
import Calendar from 'react-calendar';


import 'react-calendar/dist/Calendar.css';

import "./levko.css";


export const Levko = () => {
    const [value, onChange] = useState(new Date());


    return <div className="levko-block">
        <h1>I am Levko</h1>

        <Calendar onChange={onChange} value={value} />
    </div>
}

