import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
        // console.log(this.props);
        // const {name, age } = this.props;

    const ninjaList = ninjas.map(ninja => {
        if (ninja.age>18) {
        return (
            <div className="ninja" key={ninja.id}>
                <h1>Showing values dynamically...</h1>
                <p>Name : {ninja.name}</p>
                <p>Age : {ninja.age}</p>
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
            </div>
        )} else {
            return null;
        }
    }) 
    return (
        <div className="ninja-list">
            {ninjaList}
        </div>
    )
}

export default Ninjas;