import React from 'react'
import './styles.css';

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <form action="" className="input" onSubmit={handleAdd}>
            <input
                type="text"
                placeholder="Enter a Task"
                value={todo}
                ref={inputRef}
                onChange={(e) => setTodo(e.target.value)}
                className="input__box"
            />
            <button className="input__submit" type='submit'>Go</button>
        </form>
    )
}

export default InputField