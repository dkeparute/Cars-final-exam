import { useState } from "react";

function NewCar({createInputs }) {

    const [inputs, setInputs] = useState({
        id: '',
        plate: '',
        weight: '',
        pasangers: '',
        priority: false
    })

    const controlInputs = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        if (what === 'priority') {
            inputsCopy[what] = !inputs.priority;
        }
        setInputs(inputsCopy);
    }

    const handleCreate = () => {
        if (inputs.id === '') {
            alert('ID laukelis negali būti tuščias - automatiškai bus priskirta reikšmė!');
            inputs.id = '999';
        }
        if (inputs.plate === '') {
            alert('PLATE laukelis negali būti tuščias - redaguokite informaciją!');
            inputs.plate = 'DEFAULT';
        }
        if (inputs.weight === '') {
            alert('WEIGHT laukelis negali būti tuščias - redaguokite informaciją!');
            inputs.weight = 0;
        }
        if (inputs.pasangers === '') {
            alert('PASANGERS laukelis negali būti tuščias - automatiškai bus priskirta reikšmė!');
            inputs.pasangers = 0;
        }
        createInputs(inputs);
        setInputs({
            id: '',
            plate: '',
            weight: '',
            pasangers: '',
            priority: false
        })
    }

    return (
        <>
            <h2>Naujo automobilio įvedimas</h2>
            <div className='new-item'>
                <div className='each-new-item'>
                    <span>Identifikavimo numeris: </span> 
                    <input type="text" value={inputs.id} onChange={(e) => controlInputs(e, 'id')} placeholder='įvesti ID numerį' minLength="1" maxLength="3" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) { event.preventDefault(); }}} />
                </div>
                <div className='each-new-item'>
                    <span>Plate-valstybinis numeris: </span> 
                    <input type='text' value={inputs.plate} onChange={(e) => controlInputs(e, 'plate')}  onKeyPress={(event) => { if (!/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]/.test(event.key)) { event.preventDefault(); }}} placeholder='įvesti valstybinius nr.'/>
                </div>
                <div className='each-new-item'>
                    <span>Svoris tonomis: </span> 
                    <input type='text' value={inputs.weight} onChange={(e) => controlInputs(e, 'weight')} placeholder='įvesti svorį tonomis'onKeyPress={(event) => {if (!/[.,0-9]/.test(event.key)) { event.preventDefault(); }}}/>
                </div>
                <div className='each-new-item'>
                    <span>Keleivių skaičius: </span> 
                    <input type='text' value={inputs.pasangers} onChange={(e) => controlInputs(e, 'pasangers')} placeholder='įvesti keleivių sk.'onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) { event.preventDefault(); }}}/>
                </div>
                <div className='each-new-item'>
                    <span>Prioritetas registracijai: </span> 
                    <input type='checkbox' value={inputs.priority} onChange={(e) => controlInputs(e, 'priority')} checked={inputs.priority} />
                </div>
                <div className='each-new-item'>
                    <button onClick={handleCreate}>Pridėti</button>
                </div>
            </div>
        </>
    );
}
export default NewCar;