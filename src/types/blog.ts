export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
}

export interface Tag {
  slug: string;
  name: string;
}


export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  likes: number;
  category: Category;
  tags: Tag[];
  imageUrl: string;
}
