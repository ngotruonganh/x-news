export const compareString = (a, b) => {
    return a.toLowerCase() == b.toLowerCase()
}

const checkString = (a,b) =>{
    return a.toLowerCase().search(b.toLowerCase()) >=0
}

export const handleSearchData = (a, b) => {
    let mark = false

    return checkString(a,b)
}