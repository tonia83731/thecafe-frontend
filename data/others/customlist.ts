import { DrinkCustomKeys, MealCustomKeys } from "@/state/useCustomStore";
type CustomList<T> = {
  uid: T;
  title: string;
  options: CustomOptionList[];
};
type CustomOptionList = {
  id: string;
  name: string;
  price: number;
};
export const drinksCustomList: CustomList<DrinkCustomKeys>[] = [
  {
    uid: "size",
    title: "Drink Size",
    options: [
      {
        id: "tall",
        name: "Tall",
        price: 0,
      },
      {
        id: "grande",
        name: "Grande",
        price: 10,
      },
      {
        id: "venti",
        name: "Venti",
        price: 15,
      },
    ],
  },
  {
    uid: "sugar",
    title: "Sugar Level",
    options: [
      {
        id: "0%sugar",
        name: "Sugar Free",
        price: 0,
      },
      {
        id: "30%sugar",
        name: "30% Sugar",
        price: 0,
      },
      {
        id: "50%sugar",
        name: "Half Sugar",
        price: 0,
      },
      {
        id: "70%sugar",
        name: "70% Sugar",
        price: 0,
      },
      {
        id: "100%sugar",
        name: "Full Sugar",
        price: 0,
      },
    ],
  },
  {
    uid: "ice",
    title: "Ice Level",
    options: [
      {
        id: "hot",
        name: "Hot",
        price: 0,
      },
      {
        id: "0%ice",
        name: "No Ice",
        price: 0,
      },
      {
        id: "30%ice",
        name: "30% Ice",
        price: 0,
      },
      {
        id: "50%ice",
        name: "Half Ice",
        price: 0,
      },
      {
        id: "70%ice",
        name: "70% Ice",
        price: 0,
      },
      {
        id: "100%ice",
        name: "Full Ice",
        price: 0,
      },
    ],
  },
  {
    uid: "toppings",
    title: "Extra Toppings",
    options: [
      {
        id: "topioca",
        name: "Topioca",
        price: 5,
      },
      {
        id: "coconut-jelly",
        name: "Coconut Jelly",
        price: 5,
      },
      {
        id: "konjac-jelly",
        name: "Konjac Jelly",
        price: 5,
      },
      {
        id: "aloe-vera",
        name: "Aloe Vera",
        price: 10,
      },
      {
        id: "pudding",
        name: "Pudding",
        price: 10,
      },
      {
        id: "tea-jelly",
        name: "Tea Jelly",
        price: 10,
      },
      {
        id: "aiyu",
        name: "Aiyu",
        price: 10,
      },
    ],
  },
];
export const mealsCustomList: CustomList<MealCustomKeys>[] = [
  {
    uid: "based",
    title: "Based",
    options: [
      {
        id: "mayo",
        name: "Mayo",
        price: 0,
      },
      {
        id: "ketchup",
        name: "Ketchup",
        price: 0,
      },
      {
        id: "lettuce",
        name: "Lettuce",
        price: 0,
      },
      {
        id: "tomato",
        name: "Tomato",
        price: 0,
      },
      {
        id: "cucumbur",
        name: "Cucumbur",
        price: 0,
      },
    ],
  },
  {
    uid: "addon",
    title: "Add-on",
    options: [
      {
        id: "mustard",
        name: "Mustard",
        price: 0,
      },
      {
        id: "onion",
        name: "Onion",
        price: 0,
      },
      {
        id: "cheese",
        name: "Cheese",
        price: 5,
      },
      {
        id: "egg",
        name: "Egg",
        price: 10,
      },
      {
        id: "bacon",
        name: "Bacon",
        price: 10,
      },
      {
        id: "ham",
        name: "Ham",
        price: 10,
      },
      {
        id: "chicken",
        name: "Chicken",
        price: 50,
      },
      {
        id: "beef",
        name: "Beef",
        price: 50,
      },
    ],
  },
];
