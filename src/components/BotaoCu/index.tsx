export function CustomInput({
    title,
    placeholder,
    type,
}: {
    title: string
    placeholder?: string
    type: string
}) {
    function pesquisarPokemon() {
        console.log('galinhaaa')
    }

    // export function BotaoCu(propriedades: any) {
    return (
        <>
            <div>
                <label>{title}</label>
            </div>
            <div>
                <input type={type} placeholder={placeholder} />
            </div>
            <div>
                <button onClick={pesquisarPokemon}>PESQUISAR</button>
            </div>
        </>
    )
}
