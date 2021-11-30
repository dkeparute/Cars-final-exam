import { useState } from "react";


function Filter({ sort, simpleSort, resetData, setSearchBy }) {

    // RŪŠIAVIMAS
    const [sortValue, setSortValue] = useState('');

    const selectSort = e => {
        setSortValue(e.target.value);
        sort(e.target.value);
    }

    // ATSTATYTI DUOMENIS
    const resetHandler = () => {
        resetData();
        sort('');
        setSortValue('');
        setSearchValue('');
    }

    //    PAIEŠKA
    const [searchValue, setSearchValue] = useState('');
    const handleSearchValue = e => {
        setSearchValue(e.target.value);
        setSearchBy(e.target.value);
    }
    return (
        <>
            <h2>Paieška & Rūšiavimas</h2>
            <div className='general-filter'>
                {/* RŪŠIAVIMAS */}
                <div className='each-filter'>
                    <span>Rūšiavimas: </span>
                    <select onChange={selectSort} value={sortValue} >
                        <option value="">Pasirinkti </option>
                        <option value="weight_asc">Automobilių svoris DIDĖJIMO TVARKA </option>
                        <option value="weight_desc">Automobilių svoris MAŽĖJIMO TVARKA </option>
                        <option value="pasangers_asc">Keleivių skaičius DIDĖJIMO TVARKA </option>
                        <option value="pasangers_desc">Keleivių skaičius MAŽĖJIMO TVARKA </option>
                    </select>
                </div>
                {/* PAIEŠKA */}
                <div className='each-filter'>
                    <span>Paieška pagal valstybinius numerius: </span>
                    <input onChange={handleSearchValue} value={searchValue} placeholder="raktažodis" onKeyPress={(event) => { if (!/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]/.test(event.key)) { event.preventDefault(); }}}/>
                </div>
                {/* PAPRASTAS RŪŠIAVIMAS */}
                <div className='each-filter'>
                    <span>Rūšiavimas pagal: </span>
                    <button onClick={() => simpleSort("weight")}>Automobilių svorį</button>
                    <button onClick={() => simpleSort("pasangers")}>Keleivių skaičių</button>
                    <button onClick={resetHandler}>Atstatyti duomenis </button>
                </div>
            </div>
        </>
    );
}
export default Filter;