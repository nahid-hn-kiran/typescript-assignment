const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};

const getLength = (value: string | any[]): number => {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return value.length;
  }
};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type RatedItem = {
  title: string;
  rating: number;
};

const filterByRating = (items: RatedItem[]): RatedItem[] => {
  return items.filter((item) => item.rating >= 4);
};

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

const getUniqueValues = (
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] => {
  const resultList: (number | string)[] = [];

  const addIfNotExist = (list: (number | string)[]) => {
    for (const item of list) {
      let isDuplicate = false;

      for (const existingItem of resultList) {
        if (item === existingItem) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        resultList.push(item);
      }
    }
  };

  addIfNotExist(arr1);
  addIfNotExist(arr2);

  return resultList;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    const productTotal = product.price * product.quantity;

    const discountAmount = product.discount
      ? (productTotal * product.discount) / 100
      : 0;

    return total + (productTotal - discountAmount);
  }, 0);
};
