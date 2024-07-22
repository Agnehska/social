import { memo } from "react";

interface IInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    index: number;
}

const Input = ({ value, onChange, index }: IInputProps) => {
    return (
        <>
            <input value={value} onChange={onChange} data-index={index} />
        </>
    )
}

export default memo(Input);