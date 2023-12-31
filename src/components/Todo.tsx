import { title } from "process";

interface TodoItemProps {
  id: string;
  title: string;
  complete: Boolean;
}

const TodoItem = ({ id, title, complete }: TodoItemProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} type="checkbox" className="cursor-pointer peer" />
      <label
        htmlFor={id}
        className="peer-checked:line-through peer-checked:text-slate-500" 
      >
        {" "}
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
