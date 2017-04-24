import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import './DateInput.scss';

class DateInput extends Component {
    constructor(props) {
        super(props);
        this.state = { ddFocused: false, mmFocused: false, yyyyFocused: false };
    }

    render() {
        const { ddField, mmField, yyyyField } = this.props;

        return (
            <div className="date-input__container">
                <NumericInput
                    className="form-control date-input__dd-input"
                    style={ false }
                    min={1}
                    max={31}
                    placeholder="DD"
                    {...ddField.input}
                    onFocus={() => this.setState({ddFocused: true})}
                    onBlur={() => this.setState({ddFocused: false})}
                />
                <NumericInput
                    className={`form-control date-input__mm-input ${this.state.ddFocused ? 'date-input__mm-input_withoutLeftBorder' : ''} ${this.state.yyyyFocused ? 'date-input__mm-input_withoutRightBorder' : ''}`}
                    style={ false }
                    min={1}
                    max={12}
                    placeholder="MM"
                    {...mmField.input}
                    onFocus={() => this.setState({mmFocused: true})}
                    onBlur={() => this.setState({mmFocused: false})}
                />
                <NumericInput
                    className="form-control date-input__yyyy-input"
                    style={ false }
                    min={1970}
                    max={2017}
                    placeholder="YYYY"
                    {...yyyyField.input}
                    onFocus={() => this.setState({yyyyFocused: true})}
                    onBlur={() => this.setState({yyyyFocused: false})}
                />
            </div>
        );
    }
}

export default DateInput;
