import React from "react";
import PropTypes from "prop-types";
import injectProps from "../../_utils/decorators/injectProps";

export const ButtonType = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY'
};

const ButtonTypeToClassName = {
    [ButtonType.PRIMARY]: 'button_primary',
    [ButtonType.SECONDARY]: 'button_secondary'
};

class Button extends React.PureComponent {
    static propTypes = {
        type: PropTypes.oneOf(Object.keys(ButtonType))
    };

    @injectProps
    render({type, className, ...restProps}) {
        const typeClassName = ButtonTypeToClassName[type];
        return <button {...restProps} className={`button ${typeClassName || ""} ${className || ""}`}/>
    }
}

export default Button;
