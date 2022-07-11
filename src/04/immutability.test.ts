import {addressTitle, makeHairstyle, upgradeUSerLaptop, Usertype} from "./immutability";
import exp from "constants";


test("reference type test", () => {
    let user: Usertype = {
        name: "Nikita",
        hair: 26,
        address: {
            title: "MSK"
        },
        lapTop : {
            title : "ZenBook"
        }
    }

    const awesomeUser = makeHairstyle(user, 2)
    const newAddress = addressTitle(user,"London")
    const movedUser = upgradeUSerLaptop(user,"MacBook")

    expect(user.hair).toBe(26)
    expect(awesomeUser.hair).toBe(13)
    expect(user.address.title).toBe("MSK")
    expect(newAddress.address.title).toBe("London")
    expect(user.lapTop.title).toBe('ZenBook')
    expect(movedUser.lapTop.title).toBe("MacBook")
})