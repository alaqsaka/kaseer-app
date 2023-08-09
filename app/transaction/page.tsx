import Container from "@/components/container";
import TransactionClient from "./components/client";
import { Product } from "@/types";

const Transaction = () => {
  const products = [
    {
      id: "1",
      name: "Pizza",
      price: "10000",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "2",
      name: "Burger",
      price: "20000",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "3",
      name: "Salad",
      price: "10000",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "4",
      name: "Pasta",
      price: "11000",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "5",
      name: "Pizza",
      price: "12.99",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "6",
      name: "Burger",
      price: "20000",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "7",
      name: "Salad",
      price: "30000",
      imageUrl: `/nasigoreng.avif`,
    },
    {
      id: "8",
      name: "Pasta",
      price: "10000",
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
