import { CustomInputTeste } from '@/components/CustomInputTeste'
import { Inter } from 'next/font/google'
import * as ssp from '@ssplib/react-components'

const inter = Inter({ subsets: ['latin'] })

export default function SSPLIB() {
    return (
        <div>
            <h1>SSP LIB</h1>
            <ssp.Input name="teste" type="phone" />
        </div>
    )
}
