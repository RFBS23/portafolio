import FeaturedProject from '../../blocks/projects/proyectos'


// Section structure
import Section 		from '../../structure/section';
import Container 	from '../../structure/container';
import Badges 		from '../../utils/badge.list.util'
import Icon 		from '../../utils/icon.util'
import SectionTitle from '../../blocks/section.title.block'

import css 			from '../../../styles/sections/projects/featured.module.scss'
import content 		from '../../../content/proyectos/projects.json'

export default function FeaturedProjects() {

    return (
        <Section classProp={css.hasBg}>
            <Container spacing={'verticalXXXXLrg'}>
                <SectionTitle
                    title="Mis Proyectos"
                    preTitle="Programador Full Stack y diseñador web y UX"
                    subTitle="Centrado en la experiencia, impulsado por la ingeniería."
                /> 				{
                content.map( (data, index) => {
                    return (
                        <FeaturedProject content={data} index={index} key={index} />
                    )
                })
            }
            </Container>
            <div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span
                        className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span
                        className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
                <span className={css.afterGlowBg}></span>
            </div>
        </Section>
    )
}