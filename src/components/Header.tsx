import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo"
import styles from "./Header.module.scss"

export default async function Header() {

	const client = createClient();

	const settings = await client.getSingle("settings")

	return (
	<Bounded as="header" className={styles.header}>
		<div className={styles.header_container}>
			<Link href="/">
				<Logo />
			</Link>
			<nav>
				<ul className={styles.nav_menu}> 
					{settings.data.navigation.map(({link, label }) => (
						<li key={label}>
							<PrismicNextLink field={link} className={styles.nav_menu_link}>{label}</PrismicNextLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	</Bounded>
	);
}

// header className="py-4 md:py-6 lg:py-8"

//  className="flex gap-4 items-center justify-between sm:flex-row flex-col"

//  nav_menu className="flex"> display: flex

// nav_menu_link li className="p-3 text-slate-600 font-display font-bold">

//