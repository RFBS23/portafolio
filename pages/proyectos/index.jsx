// Sections
import FeaturedProjects from '../../components/sections/projectos/projectos'

import Color  from '../../components/utils/page.colors.util'

import settings from '../../content/_settings.json'
import colors from '../../content/projects/_colors.json'

//
export default function Projects({ user, repos }) {
	return (
		<>
		<Color colors={colors} />
		<FeaturedProjects />
		</>
	)
}

// This gets called on every request
