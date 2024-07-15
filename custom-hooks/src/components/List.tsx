import { useMousePosition } from "../hooks/useMousePosition";

const List: React.FC = () => {
    const { x, y } = useMousePosition();

    return (
        <div>
            <h1>
                Я список: ({x}, {y})
            </h1>
        </div>
    );
}

export default List;