// factory Function 

function circle(radius){
    return {
        radius,
        draw : function(){
            console.log("draw")
        }
    }
}

// Constructor Functioin

function Circle(radius){
    this.radius = radius
    this.draw = function() {
        console.log("Draw Two")
    }
}

const circle1 = new circle(2);

console.log(circle1)