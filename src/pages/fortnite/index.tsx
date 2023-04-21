import { BotaoCu } from '@/components/BotaoCu'
import { Inter } from 'next/font/google'
// import style from './style.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Fortnite() {
    return (
        <div>
            <h1 className={inter.className}>Fortnite</h1>
            <BotaoCu name="vitao"></BotaoCu>
        </div>
    )
}
