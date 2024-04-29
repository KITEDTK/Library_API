import express from "express";
import UserRoute from "./API/modules/Users/UsersRoute";
import OrdersRoute from "./API/modules/Orders/OrdersRoute";
import BookCategoriesRoute from "./API/modules/BookCategories/BookCategoriesRoute";
import BooksRoute from "./API/modules/Books/BooksRoute";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.use("/api/users", UserRoute);
app.use("/api/orders",OrdersRoute);
app.use("/api/bookCategories",BookCategoriesRoute);
app.use("/api/books",BooksRoute);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});
