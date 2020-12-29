const { Sequelize, Op } = require('sequelize');
const db = require('../models')

class ProductController {

    static async getProduct(req, res, next) {
        try {
            const getProduct = await db.products.findAll()
            res.send(getProduct)
        } catch (err) {
            next(err);
        }
    }

    static async countProduct(req, res, next) {
        try {
            const getProduct = await db.products.findAll({
                attributes: ['price', [Sequelize.fn('count', Sequelize.col('price')), 'count']],

                group: ['price'],

                where: {
                    price: { [Op.gt]: 80000 }
                }
            })

            var total = 0
            for (let i = 0; i < getProduct.length; i++) {
                total += getProduct[i].dataValues.count
            }

            res.status(200).json({
                message: 'here the data that has price up to 80000 :',
                data: {
                    getProduct,
                    total
                }
            })
        } catch (err) {
            next(err);
        }
    }

    static async addProduct(req, res, next) {
        try {
            const addProduct = await db.products.create({
                name: req.body.name,
                price: req.body.price,
            })
            res.send(addProduct)
        } catch (err) {
            next(err);
        }
    }

    static async editProduct(req, res, next) {
        try {
            const findProduct = await db.products.findOne({
                where: {
                    id: req.query.id
                }
            })
            if (findProduct) {
                const body = req.body
                const updateProduct = await db.products.update(body, {
                    where: {
                        id: req.query.id
                    }
                })
                if (updateProduct.length === 1) {
                    const updatedProduct = await db.products.findOne({
                        where: {
                            id: req.query.id
                        }
                    })
                    return res.send(updatedProduct)
                } else {
                    res.status(200).send('There is no data updated')
                }
            } else {
                res.status(404).send('Id not found')
            }
        } catch (err) {
            next(err);
        }
    }

    static async deleteProduct(req, res, next) {
        try {
            const deleteProduct = await db.products.destroy({
                where: {
                    id: req.query.id
                }
            })
            if (deleteProduct) {
                res.send('oke, it has been deleted')
            } else {
                res.send('data not found')
            }
        } catch (err) {
            next(err);
        }
    }

}
module.exports = ProductController;

