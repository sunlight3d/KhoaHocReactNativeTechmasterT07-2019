
/*
//traditional form
function sum(x, y) {
    return x + y;
}
*/
/*
const sum = (x, y) => {
    //arrow function = anonymous function = "no name" function
    return x + y
}
*/

//one - line function
const sum = (x, y) => x + y
const squared = x => x * x

let products = [
    {
        productId: 'a1',
        productName: 'iphone 3',
        year: 2012
    },
    {
        productId: 'a3',
        productName: 'iphone 5',
        year: 2015
    },
    {
        productId: 'a2',
        productName: 'iphone 4',
        year: 2014
    },
    {
        productId: 'a4',
        productName: 'iphone 6',
        year: 2016
    },
]
const doSomething = () => {
    //add new object to list, save to products2, products unchanged
    let products2 = products.concat({
        productId: 'a5',
        productName: 'iphone 7',
        year: 2017
    })
    //change products
    products.push({
        productId: 'a5',
        productName: 'iphone 7',
        year: 2017
    })
    //console.log(`products = ${JSON.stringify(products2)}`)
    //update
    products[1].productName = 'iphone 55'
    
    //filter = query
    let products3 = products.filter(p => {
        return p.year >= 2015
    })
    //query only
    products.forEach(p => {
        console.log(`p = ${JSON.stringify(p)}`)
    })
    console.log(`products3 = ${JSON.stringify(products3)}`)
    //delete = filter
    products = products.filter(product => {
        // 1 == '1' => true, 1 === '1' => false
        return product.productId !== 'a3'
    })
    console.log(`products = ${JSON.stringify(products)}`)
    //map 
    let allIds = products.map(p => {
        return p.productId
    })
    console.log(`allIds = ${JSON.stringify(allIds)}`)
}

//doTask1, doTask2, doTask3
//doTask1, doTask2 start the same time, 
//but after finished both doTask1, doTask2 => doTask3 works !
const doTask1 = () => {
    return new Promise((resolve, reject) => {
        console.log('begin task1')
        setTimeout(() => {
            resolve('finished task1')
        }, 1000)
    })
}
const doTask2 = () => {
    return new Promise((resolve, reject) => {
        console.log('begin task2')
        setTimeout(() => {
            resolve('finished task2')
        }, 2000);
    })
}
const doTask3 =  () => {
    return new Promise((resolve, reject) => {
        console.log('begin task3')
        setTimeout(() => {
            resolve('finished task3')
        }, 2000);
    })
}
const doSomething2 = async () => {
    console.log("start doSomething2")
    let result1 = doTask1()
    console.log(result1)
    let result2 = await doTask2()
    console.log(result2)
    let result3 = await doTask3()
    console.log(result3)
    console.log("End doSomething2")
    

} 
module.exports =  {
    sum22: sum,
    squared,
    doSomething,
    products,
    doSomething2
}