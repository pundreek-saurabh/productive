// console.log(module);
exports.getDate = ()=>{

    const today=new Date();
    const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
    };
    return today.toLocaleDateString("en-US",options);
}

exports.getDay = ()=>{

    const today=new Date();
    const options = {
        weekday: 'long'
    };
    return today.toLocaleDateString("en-US",options);
}