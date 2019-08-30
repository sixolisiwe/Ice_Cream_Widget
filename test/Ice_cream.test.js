describe("flavourGet", function () {
  
    it("should get price of the vanilla ice-cream", function () {
        var IceCreamInstance = factoryIceCream();
        IceCreamInstance.flavourSet("vanilla")
      
        assert.equal(2.00,   IceCreamInstance.flavourGet())   

    })

    it("should get price of the chocolate ice-cream", function () {
        var IceCreamInstance = factoryIceCream();
        IceCreamInstance.flavourSet("chocolate")
      

        assert.equal(4.00,   IceCreamInstance.flavourGet())   

    })   
    it("should get price of the strawberry ice-cream", function () {
        var IceCreamInstance = factoryIceCream();
        IceCreamInstance.flavourSet("strawberry")
      

        assert.equal(6.00,   IceCreamInstance.flavourGet())   

    }) 
})  
    
    describe("ContainerGet", function () {
  
        it("should get price of the plain cone container", function () {
            var IceCreamInstance = factoryIceCream();
            IceCreamInstance.containerSet("SugarCone")
          
            assert.equal(8.00,   IceCreamInstance.containerGet())   
    
        })
    

it("should get price of the sugar cone container", function () {
    var IceCreamInstance = factoryIceCream();
    IceCreamInstance.containerSet("SugarCone")
  
    assert.equal(8.00,   IceCreamInstance.containerGet())   

})
it("should get price of the plain cone container", function () {
    var IceCreamInstance = factoryIceCream();
    IceCreamInstance.containerSet("PlainCone")
  
    assert.equal(10.00,   IceCreamInstance.containerGet())   

})

it("should get price of the paper cup container", function () {
    var IceCreamInstance = factoryIceCream();
    IceCreamInstance.containerSet("PaperCup")
  
    assert.equal(12.00,   IceCreamInstance.containerGet())   

})

    })

    describe("toppingGet", function () {
  
        it("should get price of the CrumbedPeanuts topping", function () {
            var IceCreamInstance = factoryIceCream();
            IceCreamInstance.toppingSet("CrumbedPeanuts")
          
            assert.equal(14.00,   IceCreamInstance.toppingGet())   
    
        })
    
        it("should get price of the caramel dip topping", function () {
            var IceCreamInstance = factoryIceCream();
            IceCreamInstance.toppingSet("CaramelDip")
          
    
            assert.equal(16.00,   IceCreamInstance.toppingGet())   
    
        })   

        it("should get price of the chocolate dip", function () {
            var IceCreamInstance = factoryIceCream();
            IceCreamInstance.toppingSet("ChocDip")
          
    
            assert.equal(18.00,   IceCreamInstance.toppingGet())   
    
        }) 
        it("should get price of the smarties dip", function () {
            var IceCreamInstance = factoryIceCream();
            IceCreamInstance.toppingSet("SmartiesDip")
          
    
            assert.equal(20.00,   IceCreamInstance.toppingGet())   
    
        }) 
        it("should get price of the oreos dip", function () {
            var IceCreamInstance = factoryIceCream();
            IceCreamInstance.toppingSet("OreosDip")
          
    
            assert.equal(22.00,   IceCreamInstance.toppingGet())   
    
        }) 
        it("should get price of the astros dip", function () {
            var IceCreamInstance = factoryIceCream();
            IceCreamInstance.toppingSet("AstrosDip")
          
    
            assert.equal(24.00,   IceCreamInstance.toppingGet())   
    
        }) 

    })  

    describe("IceCream", function () {
  
        it("should get price of the IceCream set", function () {
            var IceCreamInstance = factoryIceCream();
          IceCreamInstance.toppingSet("AstrosDip")
          IceCreamInstance.flavourSet("strawberry")
          IceCreamInstance.containerSet("PlainCone")
          
            assert.equal(40.00,   IceCreamInstance.totalCost())   
    
        })
        it("should get price of the IceCream set", function () {
            var IceCreamInstance = factoryIceCream();
          IceCreamInstance.toppingSet("OreossDip")
          IceCreamInstance.flavourSet("chocolate")
          IceCreamInstance.containerSet("SugarCone")
          
            assert.equal(36.00,   IceCreamInstance.totalCost())   
    
        })

     })
    

