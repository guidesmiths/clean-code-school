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
    getOffer = () => this.offers[this.type];
    
    return {
        getName,
        getType,
        getLocation,
        getOffer
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


const Order = ({id, client, product}) => {
    this.taxes = {
        EU: 21,
        USA: 14,
    }
    this.id = id;
    this.client = client;
    this.product = product;
    
    getId = () => this.id;
    getValue = () => per2Int(this.product.getValue(), 100 -  this.client.getOffer()) + this.taxes[this.client.getLocation()];
    getProductName = () => this.product.getName();
    getClientName = () => this.client.getProductName();
    getShipping = () => this.product.getShipping();

    return {
        getId,
        getValue,
        getClientName,
        getShipping,
        getTotalPrice
    };
}



const Summary = ({order}) => {
    this.order = order;

    printSummary = () => 
        `Order: ${this.order.getId()}
        Client: ${this.order.getClientName()}
        Product: ${this.order.getProductName()}
        TotalAmount: ${this.order.getValue()}
        
        
        Arrival in: ${this.order.getShipping()} days.`;


    return {
        printSummary,
    }
}

