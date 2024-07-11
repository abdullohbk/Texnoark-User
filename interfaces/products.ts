export interface data_product{
    id: number
    brand_id: number
    createdAt: string
    lastUpdateAt: string
    name: string
    price: string
    images: string[]
    rate: number
}

interface getId {
    id: number;
}

export interface popular_product extends data_product{
    rate: number
}

export interface request_products{
    products: data_product[];
    popular_products: popular_product[];
    getProducts: () => any;
    getProductsId: (id: getId) => any
    getPopularProducts: () => any
}