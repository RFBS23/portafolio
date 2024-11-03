// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/technical.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Habilidades"
					preTitle="Mis Habilidades"
					subTitle="Como programador Full Stack y diseñador especializado en web y UX, desarrollo experiencias digitales completas, combinando tecnología moderna y diseño intuitivo para ofrecer soluciones atractivas y funcionales."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						{/*
						<CopyBlock
							title="Programador Fullstack y Freelancer"
							icon={['fat', 'lightbulb']}
							copy="Soy un programador fullstack que crea soluciones digitales completas, combinando interfaces amigables y sistemas backend seguros, utilizando diversas herramientas para generar aplicaciones efectivas y escalables."
							iconClass={about.icon}
							containerClass={about.container}
						/>*/}
						<BadgesBlock
							title="Lenguajes de programación"
							copy="Como programador fullstack que desarrolla soluciones digitales completas, fusionando interfaces amigables. Con un dominio en múltiples lenguajes de programación y diversas herramientas, creo aplicaciones efectivas y escalables que combinan funcionalidad y rendimiento."
							list={software}
							block="software"
							fullContainer="fullContainer"
							icon="code"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
						<BadgesBlock
							title="Base de Datos"
							copy="Con experiencia necesaria en bases de datos, diseño de esquemas y optimización de consultas, garantizo el manejo eficiente de la información para el desarrollo de aplicaciones robustas y escalables."
							list={database}
							block="software"
							fullContainer="fullContainer"
							icon="database"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
					</div>

					<div className={about.copy}>
						<BadgesBlock
							title="Diseño Web y UX"
							copy="Como diseñador, realizo experiencias visuales que equilibran estética y usabilidad, garantizando que cada proyecto sea atractivo y fácil de navegar. Con un enfoque centrado en la experiencia de usuario, desarrollo soluciones que integran funcionalidad y estética, asegurando que cada experiencia sea atractiva e intuitiva."
							list={tech}
							block="tech"
							fullContainer="fullContainer"
							icon="desktop"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
						<BadgesBlock
							title="Sistemas Operativos"
							copy="Soy experto en el manejo de máquinas virtuales y sistemas operativos, optimizando entornos de desarrollo y producción para maximizar el rendimiento y la seguridad de las aplicaciones."
							list={sisop}
							block="software"
							fullContainer="fullContainer"
							icon="cloud"
							containerClass={about.container}
							headerIcon={about.icon}
						/>
					</div>

					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={480} height={1111}
							   alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"/>
					</div>
				</section>
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const tech = [
	{key: 'figma', name: 'Figma', type: 'devicon'},
	{key: 'xd', name: 'Adobe XD', type: 'devicon'},
	{key: 'materialui', name: 'InDesing', type: 'devicon'},
	{key: 'materialui', name: 'SketchUp', type: 'devicon'},
	{key: 'blender', name: 'Blender', type: 'devicon'},
	{key: 'illustrator', name: 'Illustrator', type: 'devicon'},
	{key: 'vscode', name: 'VSCode', type: 'devicon'},
]

const software = [
	{key: 'java', name: 'JAVA', type: 'devicon'},
	{key: 'php', name: 'PHP', type: 'devicon'},
	{key: 'csharp', name: 'C#', type: 'devicon'},
	{key: 'dot-net', name: 'ASP.NET', type: 'devicon'},
	{key: 'flutter', name: 'FLUTTER', type: 'devicon'},
	{key: 'androidstudio', name: 'Android Studio', type: 'devicon'},
	{key: 'react', name: 'REACT', type: 'devicon'},
	{key: 'jquery', name: 'JQuery', type: 'devicon'},
	{key: 'html5', name: 'HTML', type: 'devicon'},
	{key: 'css3', name: 'CSS', type: 'devicon'},
	{key: 'javascript', name: 'JS', type: 'devicon'},
	{key: 'sass', name: 'SASS', type: 'devicon'},
	{key: 'python', name: 'PYTHON', type: 'devicon'},
	{key: 'bootstrap', name: 'BOOTSTRAP', type: 'devicon'},
	{key: 'go', name: 'GO - Basico', type: 'devicon'},
	{key: 'dart', name: 'DART', type: 'devicon'},
	{key: 'github', name: 'GITHUB', type: 'devicon'},
	{key: 'composer', name: 'COMPOSER', type: 'devicon'},
	{key: 'git', name: 'GIT', type: 'devicon'},
	{key: 'pycharm', name: 'PYCHARM', type: 'devicon'},
]

const database = [
	{key: 'microsoftsqlserver', name: 'Sql Server', type: 'devicon'},
	{key: 'mysql', name: 'MySql', type: 'devicon'},
	{key: 'sqlite', name: 'Db Browser', type: 'devicon'},
]

const sisop = [
	{key: 'ubuntu', name: 'Ubuntu', type: 'devicon'},
	{key: 'linux', name: 'Kali Linux', type: 'devicon'},
	{key: 'putty', name: 'Windows Server', type: 'devicon'},
	{key: 'devicon', name: 'VmWare', type: 'devicon'},
	{key: 'devicon', name: 'Virtual Box', type: 'devicon'},
	{key: 'windows8', name: 'Windows xp', type: 'devicon'},
	{key: 'windows8', name: 'Windows 7', type: 'devicon'},
	{key: 'windows8', name: 'Windows 8, 8.1', type: 'devicon'},
	{key: 'windows8', name: 'Windows 10, 11', type: 'devicon'},
]