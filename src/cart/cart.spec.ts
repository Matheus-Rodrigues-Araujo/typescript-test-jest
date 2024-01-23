import Product from "../products/product"
import Cart from "./cart"

const makeCart = () => {
    return new Cart
}

const makeProduct = (name: string, price: number): Product => {
    return new Product(name, price)
}

const makeSut = () => {
    const sut = makeCart()

    return {
        sut
    }
}

describe('Cart - add', () => {
    it("Should empty cart", ()=>{
        const { sut } = makeSut()
        expect(sut.items.length).toBe(0)
    })

    it("Should has one item in cart", ()=>{
        const { sut } = makeSut()
        expect(sut.items.length).toBe(0)
        sut.addItem(makeProduct('product_01', 45))
        sut.addItem(makeProduct('product_02', 10))
        expect(sut.items.length).toBe(2)
    })

    it("Should have one item if add two and remove one", ()=>{
        const { sut } = makeSut()
        expect(sut.items.length).toBe(0)
        sut.addItem(makeProduct('product_01', 45))
        sut.addItem(makeProduct('product_02', 10))
        sut.removeItem({name: 'product_02', price: 10})
        expect(sut.items.length).toBe(1)
    })

    it("Should be empty if add two and remove two", ()=>{
        const { sut } = makeSut()
        const product1 = makeProduct('product_01', 45)
        const product2 = makeProduct('product_02', 10)
        sut.addItem(product1)
        sut.addItem(product2)
        sut.removeItem(product1)
        sut.removeItem(product2)
        expect(sut.isEmpty).toBeTruthy()
    })

    it("The total SHOULD BE equals 75.50", ()=>{
        const { sut } = makeSut()
        const product1 = makeProduct('product_01', 65)
        const product2 = makeProduct('product_02', 10.50)
        sut.addItem(product1)
        sut.addItem(product2)
        expect(sut.total()).toBe(75.50) 
    })

    it("Total SHOULD return 0 if cart is empty", ()=>{
        const { sut } = makeSut()
        expect(sut.total()).toBe(0) 
    })

    it("Should clear cart", ()=>{
        const { sut } = makeSut()
        const product1 = makeProduct('product_01', 10.50)
        const product2 = makeProduct('product_02', 20)
        sut.clear()
        expect(sut.isEmpty()).toBeTruthy()
    })
})