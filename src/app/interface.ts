

export interface Product {
    _id: string;
    price: number;
    title: string;
    slug: string;
    imageURL: string;
    categoryName: string

}


export interface FullProduct {
    imageURL: string | StaticImport;
    _id: string;
    price: number;
    title: string;
    description:string;
    slug: string;
    image: any;
    categoryName: string

}
