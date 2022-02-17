import React from 'react'
import './styles.css';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }) => {
    return (
        <form action="" className="input">
            <input
                type="text"
                placeholder="Enter a Task"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="input__box"
            />
            <button className="input__submit" type='submit'>Go</button>
        </form>
    )
}

export default InputField