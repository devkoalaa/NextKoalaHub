import { useRef } from 'react'

export function CustomInputTeste({
    title,
    placeholder,
    ...props
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
