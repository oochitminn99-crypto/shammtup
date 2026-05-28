import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (

        <div className="bg-purple-900">
            {children}
        </div>

    )
}