import './CalendarItem.css'
import React from 'react'
import {Link} from 'react-router-dom'


const CalendarItem = ({data, borderBottom, capacity, onClick}) => {

    const formatDate = (date) => {
        const format = (s) => (s < 10 ? '0' + s : s)
        var d = new Date(date)
        return [format(d.getDate()), format(d.getMonth() + 1), d.getFullYear()].join(
            '/'
        )
    }

    const internalOnClick = () => {onClick(data)}

    return (
        <div className={borderBottom ? 'false-link border-bottom calendar-item col-3' : 'false-link calendar-item col-3'} onClick={internalOnClick}>
            <span className="cal-item __date">{formatDate(data.inithour)}</span>
            <span className="cal-item __hour">{new Date(data.inithour).toLocaleTimeString()}</span>
            <span className="cal-item __discipline">{data.name}</span>
            <span className="cal-item __instructor">
                <span className="avatar" style={{background: `url(${data.instructor.user.avatar}) no-repeat center center / cover`}}></span>
                <Link to="/instructor-detail">{data.instructor.user.name}</Link>
            </span>
            <span className="capacity">
                {capacity = 0 ?
                    <strong>No seats left</strong> :
                    <>
                        Seats left
            <strong className={capacity < 11 ?
                            'few' : ''}>{capacity}</strong>
                    </>
                }
            </span>
        </div>
    )
}

export default CalendarItem