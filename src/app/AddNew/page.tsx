import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";



// how server actions work is that you create a function 
//

const createTodo = async (data: FormData)=>{
"use server" 

const title = data.get("title")?.valueOf()// optional operator makes sure that it doesnt return undefined 


if(typeof(title) !== "string" || title.length == 0){
throw new Error("Invalid Title") 
}

await prisma.todo.create({data: {title, complete:false}})

redirect("/")
console.log("Hi")// this is experimental and will trigger experimental server action
}
const AddNew = () => {
  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New</h1>
      </header>

      <form action={createTodo}>
        <input
          type="text"
          name="title" // we get data from here.
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div  className="flex justify-end gap-1">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            {" "}
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            {" "}
           Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
