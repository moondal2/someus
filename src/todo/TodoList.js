import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import cn from 'classnames';

// C:\javascript\someus-app\src\img\mood_1.png
const TodoList = () => {


    // 할일 목록 출력 내용 상태 변수 정의 
    const [todos, setTodos] = useState([
        { id: 1, checked: 0, text: '' },
        { id: 2, checked: 0, text: '' },
        { id: 3, checked: 0, text: '' },
        { id: 4, checked: 0, text: '' },
        { id: 5, checked: 0, text: '' },
        { id: 6, checked: 0, text: '' },
        { id: 7, checked: 0, text: '' }
    ]);

    // 체크박스 조건 부 렌더링 ??????????

    const toggleCheck = (id) => {
        console.log(id);
        const filterTodos = todos.filter(todo => todo.id === id);
        const newTodos = filterTodos.map(todo => {
            const checked = todo.checked + 1;
            return {
                ...todo, checked: checked > 2 ? 0 : checked
            }
        });
        setTodos(newTodos);
        console.log(todos);
    };

    const images = [
        '/images/todo_null.png',
        '/images/todo_ing.png',
        '/images/todo_ok.png'
    ];
    // src\img\mood_1.png
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    function handleImageClick() {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }

    return (
        <>
            <div className="Todo">이번 달 목표</div>

            {/* 체크박스 => 이벤트 */}
            <div className="TodoListCheckBox">
                <ul>
                    {todos.map((todos, id) => (
                        <li className="todosList" key={id}>
                            {/* <img className="checkboxImg" src={`${images[currentImageIndex]}`} onClick={handleImageClick} /> */}
                            <img className="checkboxImg" src={process.env.PUBLIC_URL + images[currentImageIndex]} alt="slider image" onClick={handleImageClick} />
                            <span className="todoListInputContainer">
                                <input className="todoListInput" type="text" placeholder="!!" />
                            </span>
                            {/* <MdCheckBox /> */}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TodoList;