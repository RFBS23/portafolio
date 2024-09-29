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
				<h4>Actualmente estoy Trabajando como FREELANCER y Diseñador Web & UX.</h4>
				<h2 className={looking.json}>Junior : &#123;</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight}>Ingeniero Back y Front End</span>,</h2>
				<h2 className={looking.jsonSub}><span className={looking.highlight2}>Diseñador Web y UX</span></h2>
				<h2 className={looking.json}>&#125;</h2>
				<h4>Me interesa especialmente trabajar en roles enfocados en la interfaz de producto, donde pueda contribuir significativamente al éxito organizacional, con un enfoque centrado en el diseño de productos.</h4>
				{/*<h2>Diseñador <span className={looking.highlight}>Web y UX</span></h2>*/}
				{/*<h2 className={looking.highlight}><span className={looking.highlight}>Diseñador Web y UX</span></h2>*/}
				{/*<p className="subtitle">con enfoque en el Diseño de Productos.</p>*/}
			</Container>
		</Section>
	)
}