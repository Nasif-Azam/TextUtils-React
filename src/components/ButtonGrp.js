import React from 'react'
import propTypes from 'prop-types'

export default function ButtonGrp(props) {
    return (
        <div className="btn-group my-3" aria-label="">
            <button type="button" className="btn btn-danger">{props.one}</button>
            <button type="button" className="btn btn-warning">{props.two}</button>
            <button type="button" className="btn btn-success">{props.three}</button>
            <button type="button" className="btn btn-light">{props.four}</button>
            <button type="button" className="btn btn-dark">{props.five}</button>
            <button type="button" className="btn btn-primary">{props.six}</button>
        </div>
    );
}
ButtonGrp.propTypes = {
    one: propTypes.string.isRequired,
    two: propTypes.number
}
ButtonGrp.defaultProps = {
    one: 'One',
    two: (2),
    three: 'Three',
    four: 'Four',
    five: 'Five',
    six: 'Six'
}

