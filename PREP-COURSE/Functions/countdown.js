function countdown(num) {
    for (let i = num; i >= 0; i--) {
        if (i === 0) { 
            console.log('Blast off!')
        }
        else { 
            console.log(i)
        }
    }
    return ''
}

console.log(countdown(5))