import { UserProps } from '@/lib/sharedTypes'
import Dropdown from './DropDown'
import LoginDialog from './loginDialog'

export default function Login(props: UserProps) {
    // 获取用户信息
    const { user } = props
    console.log(user)
    return <>{user?.id ? <Dropdown img={user.avatar} /> : <LoginDialog />}</>
}
