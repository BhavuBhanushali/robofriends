import React from 'react';
import Card from './Cards'
import '../containers/App.css';


const Cardlist = ({ robots }) => {
    return (
        <>
            <div className="grids" >
                {
                    robots.map((user, i) => {
                        return (
                            <Card
                                id={robots[i].id}
                                name={robots[i].name}
                                username={robots[i].username}
                                email={robots[i].email}
                            />

                        );
                    })
                }
            </div>
        </>
    )
}

export default Cardlist;