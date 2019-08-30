const flavours = document.querySelectorAll(".flavourSel:checked");
const container = document.querySelectorAll(".containerSel:checked");
const toppings = document.querySelectorAll(".toppingSel:checked");
var addingBtn = document.querySelector(".addBtn");
var radios = document.getElementsByTagName('input');
var error = document.querySelector(".rowError")

var templateSource = document.querySelector(".userTemplate").innerHTML;
var userTemplate = Handlebars.compile(templateSource);
var priceElem = document.querySelector(".totalCost");

let IceCreamStore = factoryIceCream();

function error(errMsg){
    error.innerHTML = errMsg;
}
function totalofICeCream() {


    // console.log(perIceCream);
    const currentflav = IceCreamStore.flavourSet(flavours.value);
    const currentCont = IceCreamStore.containerSet(container.value);
    const currentTopp = IceCreamStore.toppingSet(toppings.value);
  
    if (currentflav != "" && currentCont != "" && currentTopp != "") {

    var array = [{
        
        total: "R " +  IceCreamStore.totalCost()

    }]
    
    }else{
errMsg ("invalid")
    }
    // console.log(perIceCream);

    var userData = userTemplate({
        perIceCream: array,

    });
    //    console.log(userData);

    priceElem.innerHTML = userData;
}


addingBtn.addEventListener('click', totalofICeCream)