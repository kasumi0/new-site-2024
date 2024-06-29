import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import PopupContextProvider from "@/store/popup/popupContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "TERUSI's portfolio site",
    description: "This is site about me."
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <PopupContextProvider>{children}</PopupContextProvider>
            </body>
        </html>
    )
}
