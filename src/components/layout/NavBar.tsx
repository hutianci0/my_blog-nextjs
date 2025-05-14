'use client'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'

import Link from 'next/link'

import { UserProps } from '@/lib/sharedTypes'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Login from '../login'
import { Button } from '../ui/button'
import { navOptions } from './config'

export default function NavBar(props: UserProps) {
    // 通过pathname 实现高亮
    const pathname = usePathname()
    const { user } = props

    return (
        <div className="flex h-20 items-center justify-between px-5 text-center shadow">
            {/* logo */}
            <section>logo</section>
            {/* links */}
            <section>
                <NavigationMenu>
                    <NavigationMenuList className="flex gap-10">
                        {navOptions.map((item, index) => {
                            return (
                                <NavigationMenuItem
                                    key={index}
                                    className={clsx('w-20 rounded-sm border-2 text-center', {
                                        'font-bold': pathname === item.path,
                                    })}
                                >
                                    <Link href={item.path}>{item.label}</Link>
                                </NavigationMenuItem>
                            )
                        })}
                    </NavigationMenuList>
                </NavigationMenu>
            </section>
            <section className="flex gap-4">
                <Button className="text-lg">
                    <Link href="/post">Post</Link>
                </Button>
                <Login user={user} />
            </section>
        </div>
    )
}
