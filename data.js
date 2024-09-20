let listName = {
    item : "pen",
    price : 10,
    quantity : 10,

};

for (let key in listName) {
    if (typeof listName[key] === 'number') {
        listName[key] *= 2;  
    }
}

console.log(listName);


