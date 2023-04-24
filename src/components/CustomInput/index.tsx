import { useRef } from "react"

export function CustomInput({
    title,
    placeholder,
}: {
    title: string
    placeholder?: string
}) {
    
    const inputRef = useRef(null)
    
    function pesquisarPokemon() {
        console.log('galinhaaa: ', inputRef.current.value)
    }

    // export function BotaoCu(propriedades: any) {
    return (
        <>
            <div>
                <label>{title}</label>
            </div>
            <div>
                <input ref={inputRef} placeholder={placeholder} />
            </div>
            <div>
                <button onClick={pesquisarPokemon}>PESQUISAR</button>
            </div>
        </>
    )
}
