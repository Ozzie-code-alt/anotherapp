import { prisma } from "@/db";
import { get } from "http";
import Link from "next/link";
import { todo } from "node:test";

const getTodo =()=>{
return prisma.todo.findMany()
}

const Home = async () => {

  const todos = await getTodo() // Instantiate our prisma 
  // await prisma.todo.create({data:{title:"Hellow World", complete: false}}) add data via code
  return (  <div>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl">Todos</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new" >New</Link>
    </header>
      <ul className="pl-4">
        {todos.map(todo=> <TodoItem key={todo.id} {...todo}/></li>)} 

        
      </ul>

  </div>);
}
 
export default Home;