const d20 = () =>  Math.floor(Math.random() * 20);
const d6 = () =>  Math.floor(Math.random() * 6);


const results = () => {
    console.log(d20,d6);
}

module.export = results;