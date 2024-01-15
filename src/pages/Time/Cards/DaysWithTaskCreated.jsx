function DaysWithTaskCreated({ dayRange, category, daysWithTaskCreated}) {
    console.log(daysWithTaskCreated)
    return ( 
        <div className="chart-container shadow data-container">
                <h4>De los últimos {dayRange} días:</h4>
                <h1>{ (daysWithTaskCreated / dayRange * 100).toFixed(1) } %</h1>
                <h4>has dedicado tiempo a { category }</h4>
        </div>
     );
}

export default DaysWithTaskCreated;