import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSkiDays: [
                {
                    resort: "Safari Mountain",
                    date: new Date("2/8/2017"),
                    powder: true,
                    backcountry: false
                },
                {
                    resort: "Baja California",
                    date: new Date("6/10/2017"),
                    powder: false,
                    backcountry: true
                },
                {
                    resort: "Victoria Waterfall",
                    date: new Date("11/8/2017"),
                    powder: false,
                    backcountry: false
                }
            ]
        }
        this.addDay = this.addDay.bind(this)
    }

    countDays(filter) {
        this.state.allSkiDays.filter(function(day) {
            if (filter) {
                return day[filter]
            }else{
                return day
            }
        }).length
    }

    addDay(newDay) {
        this.setState({
            allSkiDays: [
                ...this.state.allSkiDays,
                newDay
            ]
        })
    }

    render() {
        return (
            <div className="app">
                <Menu />
                {(this.props.location.pathname === '/') ?
                <SkiDayCount total={this.countDays()}
                             powder={this.countDays("powder")}
                             backcountry={this.countDays("backcountry")} /> :
                (this.props.location.pathname === '/add-day') ? 
                <AddDayForm onNewDay={this.addDay} /> :
                <SkiDayList days={this.state.allSkiDays}
                        filter={this.props.params.filter}/>
                }
            </div>
        )
    }   
}