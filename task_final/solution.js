

function sendRequest(name, phone, address, goods, sum) {
    let client = name + " " + phone;
    
    let result = {data : {client, order: {address, sum}, goods: []}};

    for (let i = 0; i < goods.length; i += 1) {
        let goodsElement = { title : goods[i].title,
                             count : goods[i].count
                            }; 
        result.data.goods.push(goodsElement);
    }

    let resultAddress = "ул. " + address.street + ", дом " + address.house + ", " + address.entrance + " подъезд, " + address.floor + " этаж, кв. " + address.flat;
    
    result.data.order.address = resultAddress;
    result.data.order.sum = sum;

   
    let jsonData = JSON.stringify(result);

    return jsonData;
}
