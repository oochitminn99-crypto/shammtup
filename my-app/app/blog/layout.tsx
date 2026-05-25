import type { ReactNode } from "react";

export default function RootLayout({ children }:{ children: ReactNode}) {
    return (
        <html lang="en">
            <head>
                <title>Blog</title>
            </head>
            <body className="body">
                {children}
            </body>
        </html>
    )
}