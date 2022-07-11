import {Usertype} from "../04/immutability";
import {addNewBooksToUser, addNewBooksToUserMap, ArrayUsertype, Filter} from "./arrayImmutability";


test("add new books to user", () => {
    let user: ArrayUsertype = {
        name: "Nikita",
        hair: 26,
        address: {
            title: "MSK"
        },
        lapTop : {
            title : "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const booksCheck = addNewBooksToUser(user, "ts")
    const booksCheckMap = addNewBooksToUserMap(user, "ts")
    const booksFilter = Filter(user, "js")

    expect(user.books.length).toBe(4)
    expect(booksCheck.books.length).toBe(5)
    expect(booksCheckMap.books[2]).toBe("ts")
    expect(booksFilter.books[2]).toBe("react")
    expect(user.books[2]).toBe('js')


})