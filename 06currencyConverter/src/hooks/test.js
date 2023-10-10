// this file is created just leaning

fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`)
    .then((res) => {
        // console.log('This is the first response', res)
        return res.json()
    })
    .then((data) => {
        console.log('This is the second response', data)
    })
// .then((res) => setData(res[currency]))
// console.log(data)


let obj = {
    name: 'Abhishek',
    age: 25
}

// console.log('This is the object', obj)
console.log('This is the object', obj['name'])