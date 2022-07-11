export type Usertype = {
    name: string
    hair: number
    address: { title: string }
    lapTop: { title: string }
}

export const makeHairstyle = (u: Usertype, power: number) => {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export const addressTitle = (u: Usertype, city: string) => {
    const copyAddress = {
        ...u, address: {
            ...u.address, title: city
        }
    }
    return copyAddress
}

export const upgradeUSerLaptop = (u:Usertype, model: string) => {
    const copyLapTop = {
        ...u, lapTop: {
            ...u.lapTop, title: model
        }
    }
    return copyLapTop
}
