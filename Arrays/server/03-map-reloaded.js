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

 
 const response = orders.map(item => item.total)
 console.log('rta', response);

//  const respuesta = orders.map(item => {
//      item.tax = .19;
//      return item;
//  })

//  console.log('respuesta 2', respuesta)
//  console.log('original', orders);

 const respuesta3 = orders.map((item) => {
    return{
        ...item,
        tax: .19
    }
 })

 console.log('respuesta3', respuesta3)
 console.log('original', orders);
