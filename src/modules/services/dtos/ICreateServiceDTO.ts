interface ICategory {
  category_id: string;
}

export default interface ICreateServiceDTO {
  description: string;
  price: number;
  availability: string;
  likes: number;
  provider_id: string;
  categories: ICategory[];
}
