import { CustomInput } from '@/components/BotaoCu'
import { Inter } from 'next/font/google'
// import style from './style.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Fortnite() {
    return (
        <div>
            <h1 className={inter.className}>Fortnite</h1>
            <CustomInput
                title="Nome:"
                placeholder="Digite seu nome"
                type="text"
            ></CustomInput>
            <CustomInput
                title="Celular:"
                placeholder="(99) 9 9999-9999"
                type="phone"
            ></CustomInput>
        </div>
    )
}
