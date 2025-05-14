import Footer from './Footer'
import NavBarWrapper from './NavBarWrapper'

export async function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="justify-betwee flex h-screen flex-col">
            <NavBarWrapper />

            <main className="flex-1 overflow-scroll">{children}</main>

            <Footer />
        </div>
    )
}
