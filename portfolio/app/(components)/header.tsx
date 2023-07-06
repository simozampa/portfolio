import Link from "next/link"
import { headers } from "next/headers";
const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SKILLS", href: "/skills" },
    { name: "PROJECTS", href: "/projects" },
    { name: "CONTACT", href: "/contact" }
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {

    const headersList = headers();
    const activePath = headersList.get("x-invoke-path");

    return (
        <div className="fixed w-full top-0">
            <div className="flex justify-between items-center mx-10 pt-4">
                <span className="text">Simone Zamparini</span>
                <ul>
                    <div className="flex items-center space-x-10">
                        {navigation.map(item => (
                            <li key={item.name}
                                className={
                                    classNames(
                                        activePath == item.href ? 'border-b-2 border-gray-900 text-gray-900 font-semibold'
                                            : 'hover:font-medium',
                                        'pb-2 text-sm')}
                            >
                                <Link href={item.href}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </div>
    )
}