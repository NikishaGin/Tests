type StreetType = {
    title: string
}

type AddressType = {
    number: number
    street: StreetType
}

export type HousesType = {
    buildeAt: number
    repaired: boolean
    address: AddressType
}


export type CityType = {
    title: string
    houses: HousesType []
    governmentBuildings: []
    citizensNumber: number
}