import './InputWithLabel.css'
import React from 'react'

export default function InputWithLabel({value, name, onChange, onBlur, type, className}) {
    return (
        <div className="form-group">
            <label className="label" htmlFor={name}>{name}</label>

            <input
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                className={className}
                name={name}
                type={type}
                placeholder={`Enter ${name}`}
            />

            <div className="invalid-feedback">{name} is required</div>
        </div>
    )
}