const getNamesGenre = (genres) =>{
    const names = []
    genres.map((genre) => {
        names.push(genre.name)
    })
    return names
}

const getCountGenre = (genres) => {
    const counts = []
    genres.map((genre) => {
        counts.push(genre.count)
    })
    return counts
}

export { getNamesGenre, getCountGenre}