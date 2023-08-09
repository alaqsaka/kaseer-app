import Container from "@/components/container";
import TransactionClient from "./components/client";
import { Product } from "@/types";

const Transaction = () => {
  const products = [
    {
      id: "1",
      name: "Pizza",
      price: "12.99",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "2",
      name: "Burger",
      price: "8.99",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "3",
      name: "Salad",
      price: "6.99",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "4",
      name: "Pasta",
      price: "10.99",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "1",
      name: "Pizza",
      price: "12.99",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "2",
      name: "Burger",
      price: "8.99",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "3",
      name: "Salad",
      price: "6.99",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "4",
      name: "Pasta",
      price: "10.99",
      imageUrl: `/nasigoreng.avif`,
    },
  ];

  return (
    <Container>
      <TransactionClient data={products} />
    </Container>
  );
};

export default Transaction;
