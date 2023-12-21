import React from 'react'

export default function Alert(props) {

    const convertToUpper = (x)=>{
        return x.charAt(0).toUpperCase() + x.slice(1);
    }

    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{convertToUpper(props.alert.type)}!</strong> {props.alert.message}
        </div>}
        </div>
    )
}
