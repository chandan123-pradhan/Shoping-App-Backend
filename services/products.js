const firebase = require('firebase');
const db = firebase.firestore();
const productDb = db.collection('Products')
const p = require('../models/product_model');
const { json } = require('express');

async function addProduct(products) {
    try {
        const snapshot = await productDb.get();

        const product = {
            'user_id': products.user_id,
            'product_name': products.product_name,
            'product_description': products.product_description,
            'old_price': products.old_price,
            'new_price': products.new_price,
            'no_of_item': products.no_of_item,
            'image': products.images,
            'product_id': snapshot.size + 1
        }
        console.log(product)
        console.log(products.images)
        await productDb.add({ product });

        return message = {
            status: 200,
            message: 'Product Added Successfully done.',
            data: {

            }
        }
    } catch (e) {

        return message = {
            status: 201,
            message: e,
            data: {

            }
        }
    }

}


async function getProducts() {
    try {
        const products=[];
        const snapshot = await productDb.get().then((querysnapshot)=>{
            querysnapshot.forEach((doc) => {
                console.log(doc.data().product.image)
                products.push({
                    'owner_id':doc.data().product.user_id,
                    'product_name':doc.data().product.product_name,
                    'product_description':doc.data().product.product_description,
                    'old_price':doc.data().product.old_price,
                    'new_price':doc.data().product.new_price,
                    'images':doc.data().product.image
                }
                )
            });
            console.log(products);
        })

        
       

        return message = {
            status: 200,
            message: 'Product get successfully done',
            data: {
                products
            }
        }
    } catch (e) {

        return message = {
            status: 201,
            message: e,
            data: {

            }
        }
    }

}







module.exports = {
    addProduct,
    getProducts
}