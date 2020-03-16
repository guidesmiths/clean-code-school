const { sqrt, pow } = Math;

//Use meaningful and pronounceable variable names
const yyyymmdstr = () => moment().format("YYYY/MM/DD");

//Use the same vocabulary for the same type of variable
const getUserInfo = () => {};
const getClientData = () => {};
const getCustomerRecord = () => {};

//Use searchable names
const timer = () => setTimeout(blastOff, 86400000); // What the heck is 86400000 for?

//Use explanatory variables
const getAddress = () => {
  const address = "Canallita's house, Madrid 95014";
  const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
  saveCityZipCode(
    address.match(cityZipCodeRegex)[1],
    address.match(cityZipCodeRegex)[2]
  );
} 

//Avoid Mental Mapping
const location = () => {
  const locations = ["Austin", "New York", "San Francisco"];
  locations.forEach(l => {
    doStuff();
    doSomeOtherStuff();
    // ...
    // ...
    // ...
    // Wait, what is `l` for again?
    dispatch(l);
  });
}

const p = (a,b) => sqrt(pow(a, 2) + (pow(b, 2)));

const f = n => [...Array(n)].reduce((a, _, i) => a.concat(i > 1 ? a[i - 1] + a[i - 2] : i),[]);

class C {
    constructor(v1, v2){
        this.v1 = v1;
        this.v2 = v2;
    }

    s() {
        return this.v1 + this.v2
    }

    p() {
        return this.v1 * this.v2
    }
}
