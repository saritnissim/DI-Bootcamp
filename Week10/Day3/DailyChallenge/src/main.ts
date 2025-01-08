type User = {
  type: 'user';
  name: string;
  age: number;
 };
 
 type Product = {
  type: 'product';
  id: number;
  price: number;
 };
 
 type Order = {
  type: 'order';
  orderId: string;
  amount: number;
 };


function handleData(data: (User | Product | Order)[]): void {
  data.forEach(item => {
    switch (item.type) {
      case 'user':
        console.log(`User: ${item.name}, ${item.age}`);
        break;
      case 'product':
        console.log(`Product: ${item.id}, ${item.price}`);
        break;
      case 'order':
        console.log(`Order: ${item.orderId}, ${item.amount}`);
        break;
      default:
        throw new Error('Invalid data type');
    }
  });
}
const testData:(User | Product | Order)[] = [
  { type: 'user', name: 'Alice', age: 30 },
  { type: 'product', id: 101, price: 50 },
  { type: 'order', orderId: 'ORD123', amount: 200 }
];
handleData(testData);