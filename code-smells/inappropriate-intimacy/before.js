/*
Signs and Symptoms
One class uses the internal fields and methods of another class.

Reasons for the Problem
Keep a close eye on classes that spend too much time together. Good classes should know as little about each other as possible. Such classes are easier to maintain and reuse.

Treatment
The simplest solution is to use Move Method and Move Field to move parts of one class to the class in which those parts are used. But this works only if the first class truly doesn’t need these parts.

https://refactoring.guru/smells/inappropriate-intimacy
*/


const per2Int = (value, per) => (value * per) / 100;


const Client = ({name, type, location}) => {
    this.offers = {
        normal: 0,
        premium: 20,
    } 
    this.name = name;
    this.type = type;
    this.location = location;

    getName = () => this.name;
    getType = () => this.name;
    getLocation = () => this.location;
    getPriceByProduct = product => 
        (product.value - per2Int(product.value, this.offers[this.type]));
    
    return {
        getName,
        getType,
        getLocation,
        getPriceByProduct,
    };
}


const Product = ({value, name, shipping }) => {

    this.value = value;
    this.name = name;
    this.shipping = shipping;
    
    getValue = () => this.value;
    getProductName = () => this.name;
    getShipping = () => this.shipping;

    return {
        getValue,
        getProductName,
        getShipping
    };
}


const Order = ({id, value, client, product}) => {
    this.taxes = {
        EU: 21,
        USA: 14,
    }
    this.id = id;
    this.value = value;
    this.client = client;
    this.product = product;
    
    getId = () => this.id;
    getValue = () => this.value;
    getClient = () => this.client;
    getProduct = () => this.product;
    getTaxes = (loc) => this.getTaxes(this.taxes[loc]);

    return {
        getId,
        getValue,
        getClient,
        getProduct
    };
}




const Summary = ({order}) => {
    this.order = order;

    printSummary = () => {
        let client = order.getClient();
        let product = order.product()

        return `Order: ${order.getId()}
                Client: ${client.getName()}
                Product: ${product.getProductName()}
                TotalAmount: ${client.getPriceByProduct(product) + this.order.getTaxes(client.getLocation())}
                
                
                Arrival in: ${this.order.product.getShipping()} days.`;
    }

    return {
        printSummary,
    }
}

