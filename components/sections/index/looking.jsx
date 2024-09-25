// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';

// Specing util
import Spacing 		from '../../utils/spacing.util';

// Section general blocks
import SectionGridBg from '../../blocks/section.grid.block'
import SectionTitle from '../../blocks/section.title.block'

// Section scss
import looking 		from '../../../styles/sections/index/looking.module.scss';
import section 		from '../../../styles/blocks/section.title.module.scss'

/**
 * Section: Looking
 * Declare your employment intentions 🚀
 * 
 * @returns {jsx} <Looking />
 */
export default function Looking() {
	return (
		<Section classProp={`${looking.section} borderBottom`}>
			<Container classProp={`${section.title} ${looking.container}`} spacing={['verticalXXXLrg']}>
				<h4>Actualmente estoy buscando empleo.</h4>
				<h2 className={looking.json}>Junior : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Ingeniero Back y Front End</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Diseñador Web y Experiencia de Usuario</span>
				</h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>Estoy particularmente interesado en puestos de interfaz de producto donde pueda ayudar a generar un impacto en toda la organización.</h4>
				{/* <h2>Senior <span className={looking.highlight}>User Index</span> Designer</h2> */}
				{/* <p className="subtitle">with a focus on Product Design.</p> */}
			</Container>
		</Section>
	)
}