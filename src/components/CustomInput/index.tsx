import { useRef } from 'react'

export function CustomInput({
    title,
    placeholder,
}: {
    title: string
    placeholder?: string
}) {
    return (
        <>
            <div>
                <label>{title}</label>
            </div>
            <div>
                <input placeholder={placeholder} />
            </div>
            <div>
                <button>PESQUISAR</button>
            </div>
        </>
    )
}
