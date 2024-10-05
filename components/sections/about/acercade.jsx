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
import about from '../../../styles/sections/index/about.module.scss';

export default function About() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Acerca De"
					preTitle="Mi Experiencia"
					subTitle="&nbsp;"
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/fotomia.jpg" alt="Mi foto"/>
						{/* <Image src="/img/fotomia.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock
							title="Perfil Profesional"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'briefcase' ]}
							copy="Soy egresado de la carrera de Ingeniería de Software con especialización en Inteligencia Artificial, con 3 años de experiencia en programación y computación a nivel intermedio. Mi objetivo es seguir desarrollando y aplicando mis habilidades en un entorno profesional, aportando valor y soluciones innovadoras."
						/>
						<BadgesBlock
							title="Valores y Habilidades"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="hands-helping"
							copy="Me considero una persona responsable, confiable y con sólidos valores. Tengo facilidad para integrarme en equipos de trabajo y puedo desempeñarme eficazmente tanto en grupo como de manera individual, cumpliendo con las funciones asignadas. Estoy comprometido con el aprendizaje continuo y siempre dispuesto a poner en práctica los conocimientos adquiridos a lo largo de mi carrera."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'desktop', name: 'Kali Linux', type: 'fad' },
	{ key: 'laptop', name: 'Ubuntu', type: 'fad' },
	{ key: 'server', name: 'Windows Server', type: 'fad' },
	{ key: 'code', name: 'GitHub', type: 'fad' },
]