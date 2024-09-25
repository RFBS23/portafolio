import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ThemeMode from '../utils/theme.util';

import settings from '../../content/_settings.json';
import content from '../../content/navbar.json';
import css from '../../styles/structure/navbar.module.scss';

export default function Navbar() {

	const router = useRouter();
	const [menuState, setMenuState] = useState(false); // Asegúrate de que setMenuState esté definido

	useEffect(() => {
		// Función para manejar el cambio de ruta
		const handleRouteChange = () => setMenuState(false);

		// Agregar el evento de cambio de ruta
		router.events.on('routeChangeComplete', handleRouteChange);

		// Limpiar el evento al desmontar el componente
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]); // Dependencia correcta

	const toggleMenu = () => setMenuState(prev => !prev);

	return (
		<nav id="Navbar" className={css.container}>
			<ul className={css.menu}>
				<li className={css.menuHeader}>
					<Link className={css.logo} href="/">
						{settings.name}
					</Link>
					<button onClick={toggleMenu} className={css.mobileToggle} data-open={menuState}>
						<div>
							<span></span>
							<span></span>
						</div>
					</button>
				</li>
				<li data-open={menuState} className={css.menuContent}>
					<ul>
						{content.map(({ url, title }, index) => (
							<li key={index}>
								<Link href={url}>{title}</Link>
							</li>
						))}
						<li>
							<ThemeMode />
						</li>
					</ul>
				</li>
			</ul>
			<span onClick={toggleMenu} className={css.menuBlackout} data-open={menuState}></span>
		</nav>
	);
}
