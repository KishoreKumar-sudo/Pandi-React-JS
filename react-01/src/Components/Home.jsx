import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
    /*
    USAGE : Get all the products
    URL : http://127.0.0.1:5000/api/products
    Method : GET
    Fields : no-fields
 */
/*
    USAGE : Get a Single Product
    URL : http://127.0.0.1:5000/api/products/:id
    Method : GET
    Fields : no-fields
 */
/*
    USAGE : Create a Product
    URL : http://127.0.0.1:5000/api/products/
    Method : POST
    Fields : name , image , price , qty , info
 */
/*
    USAGE : Update a Product
    URL : http://127.0.0.1:5000/api/products/:id
    Method : PUT
    Fields : name , image , price , qty , info
 */
/*
    USAGE : Delete a Product
    URL : http://127.0.0.1:5000/api/products/:id
    Method : DELETE
    Fields : no-fields
 */
/*{
	"name": "Iphone 20",
	"image": "Coming from China",
	"price": 150000,
	"qty": 2,
	"info": "Village Hospital"
}*/
  )
}

export default Home