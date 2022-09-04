import {Component} from "react";

class ScrollBox extends Component {
    render() {
        const Style = {
            border : '1px solid black',
            height : '200px',
            width : '300px',
            overflow : 'auto',
            position  : 'relative'
        }

        const innerStyle = {
            width: '100%',
            height : '650px',
            background : 'linear-gradient(white, black)'
        }

        return (
            <div
            style={Style}
            ref={(ref) => {this.box = ref} }>
                <div style={innerStyle} />

            </div>
        )
    }
}

export default ScrollBox