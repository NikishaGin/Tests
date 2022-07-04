import {studentType} from "../object/object";
import {addSkill, countryTitleStudent, isMarriedStudent} from "./03";
import {text} from "stream/consumers";

let student: studentType
beforeEach(()=>{
    student = {
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
})

test("new tech skill", () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "JS")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined() //id определенно

})





test("isMarried tobe false", ()=>{
    isMarriedStudent(student)

    expect(student.isMarried).toBe(false)
})




test("student countryTitle", ()=>{

    let result1 = countryTitleStudent(student, "MSK")
    let result2 = countryTitleStudent(student, "SPB")

    expect(result1).toBe(true)
    expect(result2).toBe(false)
})