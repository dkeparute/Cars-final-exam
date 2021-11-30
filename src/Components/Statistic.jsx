function Statistic({ stats }) {

    return (
        <div>
            <h2>Statistika</h2>
            <div className='statistic-results'>
                <span>Automobilių kiekis: <i>{stats.carsCount}</i></span>
                <span>Visų automobilių svoris: <i style={{color: stats.carsWeight > 50 ? 'blue' : '#f65058ff' }}>{stats.carsWeight}</i> tonos</span>
                <span>Automobilių svorio vidurkis: <i>{stats.carsAverage.toPrecision(4)}</i> tonos</span>

            </div>
        </div>
    )
}
export default Statistic;