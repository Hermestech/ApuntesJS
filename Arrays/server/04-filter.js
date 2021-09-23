const words = ['spray', 'limit', 'elite', 'exhuberant'];

const newArray = [];

for (let index= 0; index < words.length; index++){
    const element = words[index];
    if(element.length >= 6){
        newArray.push(element);
    }
}
console.log('newArray', newArray);
console.log('original', words);

const response = words.filter(item => item.length >= 6)

console.log('Filter', response);
console.log('original', words);


const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  const response3 = orders.filter(item => item.delivered && item.total >= 100)
  console.log('response3', response3);

  const search = (query) => {
      return orders.filter(item => {
          return item.customerName.includes(query);
      })
  }

  console.log(search('e'))