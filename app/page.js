export default function Home() {
  return (
    <>
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-16 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full rounded"
        />
        <textarea
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
    </>
  );
}
