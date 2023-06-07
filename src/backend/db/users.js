import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
 
  {
    _id: uuid(),
    firstName: "Sumedh",
    lastName: "Kurhade",
    email: "sumedhk12@gmail.com",
    password: "password",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    address: [
      {
        _id: uuid(),
        name: "Sumedh Kurhade",
        street: "13, Jogeshwari",
        city: "Mumbai",
        state: "Maharashtra",
        zipcode: '400057',
        country: 'India',
        mobile: '5678967733',
    },
    ]
  },
];
