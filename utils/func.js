function getTagColor(type) {
    const lowCase = type.toLowerCase()
    switch (lowCase) {
        case 'all':
            return 'tag-all'
        case 'bank':
            return 'tag-bank'
        case 'blockchain':
            return 'tag-blockchain'
        case 'crypto':
            return 'tag-crypto'
        case 'payment':
            return 'tag-payment'
        case 'nft':
            return 'tag-nft'
        case 'investments':
            return 'tag-investments'
        default:
            return 'tag-all'
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export {
    getTagColor,
    sleep
}