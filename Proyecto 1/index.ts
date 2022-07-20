const order = {
    a: "girasol",
    b: "aguacate",
    c: "camiseta"
}

function ordenar (order){
    let keys = Object.keys(order);
    let vals = Object.values(order);

    keys.sort();
    vals.sort();

    console.log(keys,vals);
}


ordenar(order);


