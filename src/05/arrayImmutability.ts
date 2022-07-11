export type ArrayUsertype = {
    name: string
    hair: number
    address: { title: string }
    lapTop: { title: string }
    books: string []
}


export const addNewBooksToUser = (u: ArrayUsertype, material: string) => {
    const copyBooks = {
        ...u,
        books: [...u.books, material]
    }

    return copyBooks
}


export const addNewBooksToUserMap = (u: ArrayUsertype, material: string) => {
    const copy = {
        ...u,
        books: u.books.map(b => b === "js" ? material : b)
    }
    return copy
}
export const Filter = (u: ArrayUsertype, material: string) => {
    const copyFilter = {
        ...u,
        books: u.books.filter(b=>b !== material)
    }
    return copyFilter
}


