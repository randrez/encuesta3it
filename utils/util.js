const getNamesGenre = (results) =>{
    const names = []
    results.map((result) => {
        names.push(result.name)
    })
    return names
}

const getCountGenre = (results) => {
    const counts = []
    results.map((result) => {
        counts.push(result.count)
    })
    return counts
}

const getDataGraphic = (results) => {
    return {
        labels: getNamesGenre(results),
        datasets: [
            {
                data: getCountGenre(results),
            }
        ]
    }
}

export { getDataGraphic}