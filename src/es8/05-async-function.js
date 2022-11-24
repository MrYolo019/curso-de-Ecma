const fnAsync = () => {
    return new Promise(() => {
        (true)
        ? setTimeout(() => resolve('AsynC'), 2000)
        : reject(new Error('Error!'));
    })
}

const anotherFn = async () =>{
    const something = await fnAsync(); 
    console.log(something);
    console.log('Hello!');
}