import {multiply, splitIntoWords, sum} from "./01";


test.skip('sum should be correct', () => {
    const a = 1
    const b = 2
    const c = 3

    const result1 = sum(a, b)
    const result2 = sum(b, c)

    expect(result1).toBe(3) // какой результат ожидаем
    expect(result2).toBe(5) // какой результат ожидаем
})




test.skip('multiply should be correct', () => {
    const a = 1 // исходные данные
    const b = 2
    const c = 3

    const result1 = multiply(a, b) // условие , действие
    const result2 = multiply(b, c) // условие

    expect(result1).toBe(2) // какой результат ожидаем
    expect(result2).toBe(6) // какой результат ожидаем
})




test("split Into words be correct", () => {
    const sent1 = "Hello my friends"

    const result1 = splitIntoWords(sent1)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')

})