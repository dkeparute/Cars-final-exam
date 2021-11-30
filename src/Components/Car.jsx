function Car({ car, deleteCar, modal }) {

// MODALO RODYMAS PASPAUDUS REDAGUOTI MYGTUKĄ
    const showEdit = () => {
        modal(car)
    }

    // PRIORITY VALIDACIJA
    const prio = (p) => {
        if (p === 1) {
            return 'Taip';
        } else {
            return 'Ne';
        }
    }

    return (
        <>
            <div className='list'>
                <h2>Automobilis</h2>
                <span>Identifikavimo numeris: </span>
                <div className='each-item'>
                    <div>{car.id}</div>
                </div>
                <span>Plate-valstybinis numeris: </span>
                <div className='each-item'>
                    <div>{car.plate}</div>
                </div>
                <span>Svoris tonomis: </span>
                <div className='each-item'>
                    <div>{car.weight}</div>
                </div>
                <span>Keleivių skaičius: </span>
                <div className='each-item'>
                    <div>{car.pasangers}</div>
                </div>
                <span>Prioritetas registracijai: </span>
                <div className='each-item'>
                    <div>{prio(car.priority)}</div>
                </div>
                <button onClick={() => deleteCar(car.id)}>Trinti</button>
                <button onClick={showEdit}>Redaguoti</button>
            </div>
        </>
    );

}
export default Car;