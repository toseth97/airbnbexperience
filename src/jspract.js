const names = ['alice', 'bob','caterine','diana','elon']

//make the first leter capital

const newName = names.map((item)=>{
    const split = item.split('')
    split[0].toUpperCase
    
    return split.join('')
})
console.log(newName)