// components/navbar/navbar-wrapper.tsx
import { getSession } from '@/lib/getSession'
import NavBar from './NavBar'

export default async function NavBarWrapper() {
    const session = await getSession()
    const { nickname, id, avatar } = session

    return <NavBar user={{ id, nickname, avatar }} />
}
