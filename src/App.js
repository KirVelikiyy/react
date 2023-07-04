import { useState } from "react";

let nextIndex = 0

export default function List() {
    const [list, setList] = useState([])
    const [name, setName] = useState('')
    const [insertIndex, setInsertIndex] = useState(0)

    function getCopyList(l) {
        return [...l]
    }
    function handleAddClick() {
        const nextList = [
            ...list.slice(0, insertIndex),
            {id: nextIndex++, name: name},
            ...list.slice(insertIndex)
        ];
        setList(nextList);
        setName('');
    }

    function handleReverseClick(e) {
        const nextList = getCopyList(list);
        nextList.reverse();
        setList(nextList);
        e.stopPropagation()
    }

    function handleSortClick() {
        const nextList = getCopyList(list);
        nextList.sort((a, b) => (a.name > b.name) ? 1 : -1);
        setList(nextList);
    }

    return (
        <>
            <button onClick={handleReverseClick}>
                reverse
            </button>
            <button onClick={handleSortClick}>
                sort
            </button>
            <div>
                <h2>Insert Index value:</h2>
                <input
                    readOnly={true}
                    value={insertIndex}
                />
                <button
                    onClick={() => setInsertIndex(insertIndex + 1)} >
                    +1
                </button>
                <button
                    onClick={() => setInsertIndex(insertIndex - 1)} >
                    -1
                </button>
            </div>
            <h1>List values:</h1>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAddClick}>
                Add
            </button>
            <ul>
                {list.map((element) => (
                    <li key={element.id}>
                        {element.name}
                    </li>
                ))}
            </ul>
        </>
    );
}
