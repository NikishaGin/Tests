import {studentType} from "../object/object";

export const sum = (a: number, b: number) => {
    return a + b
}

export const addSkill = (student: studentType, skill: string ) => { //функция которая добавляет
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}




export const isMarriedStudent = (student: studentType ) => {
    student.isMarried = false
}




export const countryTitleStudent = (student: studentType, city: string) => {
    return student.address.city.title === city
}