import React from 'react'
import "./time.css"
import {BiTime} from "react-icons/bi"

export const Time = () => {

    function clock() {
        let date = new Date();
        let h = date.getHours();
        let m = date.getMinutes();
        let s = date.getSeconds();

        if (h == 0) {
            h = 12;
        }
        if (h > 12) {
            h = h - 12
        }

        h = (h < 10) ? '0' + h : h;
        m = (m < 10) ? '0' + m : m;
        s = (s < 10) ? '0' + s : s;



        let Vaqt = h + ":" + m + ':' + s;
        document.getElementById('clock').innerText = Vaqt
        document.getElementById('clock').textContent = Vaqt

        setTimeout(clock, 1000);
    }

    return (
        <div className='clock' onClick={clock}>
            <BiTime/>
            <span id='clock'></span>
        </div>
    )
}
