type technologiesType = {
    id: number,
    title: string,
}

type cityType = {
    title: string,
    countryTitle: string,
}

type addressType = {
    streetTitle: string,
    city: cityType
}


export type studentType = {
    name: string,
    age: number,
    isMarried: boolean
    address: addressType
    technologies: technologiesType[]
}


export const student = {
    name: "Nikita",
    age: 26,
    isMarried: true,
    address: {
        streetTitle: "Prospect",
        city: {
            title: "MSK",
            countryTitle: "Russia"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}