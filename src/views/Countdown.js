import React, { useState, useEffect } from "react";

class Countdown extends React.Component {
    state = {
        count: 10
    }
    timer = null

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
    componentDidMount() {
        // setTimeout(() => {
        //     console.log('me');
        // }, 1000);

        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000);
    }
    componentDidUpdate(preState, preProps) {
        if (preState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                // this.props.onTimesUp();
            }
        }
    }


    render() {
        return (
            <div>{this.state.count} class</div>
        )
    }

    // export default Countdown;


}
const NewCountdown = (props) => {
    const [count, setCount] = useState(10)
    useEffect(() => {

        if (count === 0) {
            props.onTimesUp();
            return;
        }
        let timer = setInterval(() => {
            console.log('run me');
            setCount(count - 1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [count]);
    return (
        <div>{count} hook</div>
    )
}


export { Countdown, NewCountdown };