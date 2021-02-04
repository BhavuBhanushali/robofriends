/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import '../containers/App.css';


const Cards = (props) => {
    return (
        <>
            {/* <h1>Robohash</h1> */}
            <div className="mycontainer">
                <div className="card" >
                    <img className="card-img-top" src={`https://robohash.org/${props.id}?200*200`} alt="Card image" />
                    <div>
                        <h4 className="card-title">{props.name}</h4>
                        <p className="card-text">{props.email}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Cards;