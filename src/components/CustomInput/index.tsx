import { useRef } from 'react'

export function CustomInput({ title }: { title: string }) {
    return (
        <>
            <div>
                <label>{title}</label>
            </div>
        </>
    )
}
