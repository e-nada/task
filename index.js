function calculateOrder( productType, quantity, customerType)
{
    let price;
    if(productType==="phone")
        {
        price=15000; 
    }
    else if(productType==="laptop")
    {
        price=8000;
    }
     else if(productType==="tablet")
    {
       price=5000;
    }
    else {
        return "invalid product";
    }
    let discount;
    switch (customerType) {
        case 'regular':
            discount = 0;
            break;
        case 'vip':
            discount = 0.1; 
            break;
        case 'employee':
            discount = 0.2; 
             break;
        default:
            return "Invalid customer type";
            }

    let total = price * quantity * (1 - discount);
    let massage={productType, quantity ,customerType ,total}

    if (quantity >= 3) {
        message = "\nYou got a free accessory!";
    }

    return message;

console.log(calculateOrder('laptop', 3, 'vip'));
console.log(calculateOrder('phone', 2, 'employee'));
console.log(calculateOrder('tablet', 4, 'regular'));
console.log(calculateOrder('camera', 1, 'vip'));
console.log(calculateOrder('laptop', 1, 'guest'));
}
