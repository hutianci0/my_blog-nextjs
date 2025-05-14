import { removeSession } from '@/lib/getSession'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Dropdown({ img }: { img: string | null }) {
    const router = useRouter()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Image
                    src={img ? img : '/user.svg'}
                    alt="user"
                    width={40}
                    height={20}
                    className="rounded-3xl outline-1"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="rounded-sm bg-white p-4 shadow-lg ring-1 ring-black/5">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        {' '}
                        <Link href="/profile">Profile</Link>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={async () => {
                        await removeSession()
                        router.refresh()
                    }}
                >
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
