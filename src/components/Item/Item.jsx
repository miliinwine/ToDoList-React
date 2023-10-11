import { useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../../store/todoSlice";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";
import style from "./Item.module.css";

export const Item = ({ text, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <Input
        type="checkbox"
        className={style.checkbox}
        handler={() => dispatch(toggleComplete({ id }))}
      />
      <span>{text}</span>
      <Button
        className={style.cross}
        handler={() => dispatch(deleteTask({ id }))}
        children="❌"
      />
    </li>
  );
};
