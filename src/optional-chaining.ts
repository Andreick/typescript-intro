type Customer = {
    birthday?: Date
};

function getCostomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCostomer(0);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[]

// Optional call
let log: any = null;
log?.('a');