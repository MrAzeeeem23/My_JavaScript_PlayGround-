const Heros = ['thor','hulk','ironman']

let heroPowers = {
    thor: 'Hammer',
    Hulk: 'BigBody',
    ironman: 'Swag',

    getSuperHero: function(){
        console.log(`thor has power of ${this.thor}`)
    }
}


Array.prototype.Khan = function(){
    console.log(`Khan is present in all of the arrays`)
}

Object.prototype.Azeem = function(){
    console.log(`Azeem is present in all of the objects 😁`)
}


// heroPowers.Khan()
// Heros.Khan()

String.prototype.Truelenght = function() {
    // console.log(x)
    console.log(this)
    console.log(`The ture length of Sting is ${this.trim()}`)
}

"hello world     ".Truelenght()
