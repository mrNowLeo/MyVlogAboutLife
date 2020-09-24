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
            <div class="big-calendar">
                <div class="current-date">
                    <div class="current-day text-center">{this.state.currentDay}</div>
                    <div class="current-month title-text">{this.state.currentMonth}</div>
                </div>
                <div class="opened-calendar">
                    {this.state.dayOfMonth.map(item => (
                        <div class="one-day text-center" key={item}>{item}</div>
                    ))}
                </div>
            </div>
        );
    }
}

export default BigCalendar;
