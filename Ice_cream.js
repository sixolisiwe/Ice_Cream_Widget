function factoryIceCream() {
    let flavour = 0;
    let container = 0;
    let topping = 0;
    let totalICeCream = 0;

    function flavourSet(Input) {
        var radioBillItems = Input
        if (radioBillItems === "vanilla") {
            flavour += 2.00;
        } else if (radioBillItems === "chocolate") {
            flavour += 4.00;
        } else {
            flavour += 6.00;
        }
    }

    function flavourGet() {
        return flavour.toFixed(2);
    }


    function containerSet(cont) {
        var radioCont = cont
        if (radioCont === "SugarCone") {
            container += 8.00;
        } else if (radioCont === "PlainCone") {
            container += 10.00;
        } else {
            container += 12.00;
        }
    }

    function containerGet() {
        return container.toFixed(2)
    }

    function toppingSet(toppType) {
        var typeofTopping = toppType
        if (typeofTopping === "CrumbedPeanuts") {
            topping += 14.00
        } 
        else if (typeofTopping === "CaramelDip") {
            topping += 16.00
        }
       else if (typeofTopping === "ChocDip") {
            topping += 18.00
        } 
       else if (typeofTopping === "SmartiesDip") {
            topping += 20.00
        }
       else if (typeofTopping === "OreosDip") {
            topping += 22.00
        } 
        else  {
            topping += 24.00
        }
    }


    function toppingGet() {
        return topping.toFixed(2)
    }

    function totalCost(){
        totalICeCream = flavour + container + topping
        return totalICeCream.toFixed(2)
    }

    return {
        flavourSet,
        flavourGet,
        containerSet,
        containerGet,
        toppingSet,
        toppingGet,
        totalCost
    }
}