'use client'

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navigation = [
    { number: "01.", name: "Home", href: "/" },
    { number: "02.", name: "About", href: "/#about" },
    { number: "03.", name: "Skills", href: "/skills" },
    { number: "04.", name: "Projects", href: "/projects" },
    { number: "05.", name: "Contact", href: "/contact" }
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const pathName = usePathname();

    return (
        <div className="sticky w-full top-0 px-32">
            <div className="flex justify-between items-center pt-4">
                <span className="p-1 text-sky-300 text-xs border border-sky-300">SZ</span>
                <ul>
                    <div className="flex items-center space-x-10">
                        {navigation.map(item => (
                            <li key={item.name} className="pb-4">
                                <Link href={item.href} >
                                    <span className='text-[11px] text-sky-300 mr-1'>
                                        {item.number}
                                    </span>
                                    <span className={
                                        classNames(
                                            pathName == item.href ? 'font-semibold'
                                                : '',
                                            'text-gray-300 text-sm')}
                                    >
                                        {item.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}