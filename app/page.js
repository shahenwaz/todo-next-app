"use client";
import Table from "@/components/Table";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  // Using useState hook to store the form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // Collecting the data from the form
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };

  // To prevent the page from reloading when the form is submitted
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // API code goes here to get http request

      // Toast Notification
      toast.success("Task Added Successfully");
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <form
        onSubmit={onSubmitHandler}
        className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-16 px-2 mx-auto"
      >
        <input
          value={formData.title}
          onChange={onChangeHandler}
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full rounded"
        />
        <textarea
          value={formData.description}
          onChange={onChangeHandler}
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 rounded w-full"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-600 py-3 px-11 text-white w-full rounded"
        >
          Add Task
        </button>
      </form>
      <Table />
    </>
  );
}
