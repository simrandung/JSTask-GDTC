export interface Products {
    id: number,
    title: string,
    category: string,
    price: number,
    description:string
}

export interface ProductResponse {
    products: Products[],
    total: number
}