import { Component} from "react";
import PropTypes from "prop-types";

class ClassComponent extends Component{
    render() {
        const {name, favoriteNumber, children} = this.props;

        return (
            <div>
                안녕하세요. 제 이름은 {name} 입니다.<br />
                children 값은 {children} 입니다.
                제가 좋아 하는 숫자는 {favoriteNumber} 입니다.
            </div>
        )
    }
}

ClassComponent.defaultProps = {
    name : "기본 이름"
}

ClassComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
}

export default ClassComponent;