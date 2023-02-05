export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Beautiful World, Where Are You',
            author: 'Sally Rooney',
            price: 18,
            coverImage: 'https://m.media-amazon.com/images/I/81I9C+LMXgL._AC_UL320_.jpg'
        },
        {
            id: 2,
            title: '1984',
            author: 'George Orwell',
            price: 10,
            coverImage: 'https://m.media-amazon.com/images/I/71kxa1-0mfL._AC_UY218_.jpg'
        }
    ];

    getBooks() {
        return new Promise((resolve, reject) => {
           setTimeout(() => {
               resolve(this.data)
           }, 700);
        });
    }
}
