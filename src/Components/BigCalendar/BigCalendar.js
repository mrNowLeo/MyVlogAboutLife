import React from 'react';
import './BigCalendar.css';

class BigCalendar extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date();
        const countOfDaysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        this.state = {
            dayOfMonth: [],
            currentDay: date.getDate(),
            currentMonth: date.toLocaleString('en', {month: 'long' })
        };
        for (var i = 1; i <= countOfDaysInMonth; i++) {
            this.state.dayOfMonth.push(i);
        }
    }
    
    render() {
        return (
            <div class="BigCalendar_big-calendar">
                <div class="BigCalendar_current-date">
                    <div class="BigCalendar_current-day text-center">{this.state.currentDay}</div>
                    <div class="BigCalendar_current-month title-text">{this.state.currentMonth}</div>
                </div>
                <div class="BigCalendar_opened-calendar">
                    {this.state.dayOfMonth.map(item => (
                        <div class="BigCalendar_one-day text-center" key={item}>{item}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default BigCalendar;
