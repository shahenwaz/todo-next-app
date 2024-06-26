import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://shahenwaz:shahenwaz01022002@cluster0.ftabpdh.mongodb.net/todo-next-app"
  );
  console.log("Connected to MongoDB");
};
