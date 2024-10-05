// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Index scss
import career from '../../../styles/sections/index/career.module.scss'

export default function Index() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experiencia"
					preTitle="MI"
					subTitle="Tengo experiencia en desarrollo de software con múltiples lenguajes, aplicando conocimientos prácticos y soluciones eficientes."
				/>
				<section className={career.area}>
					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Valiant S.A.C.</h3>
								<h4>Freelancer</h4>
								<h4>15 Mayo 2024 - Actualmente</h4>
								<h5>Santa Anita, Lima, Perú</h5>
							</span>
							<p>
								Actualmente, me encuentro desarrollando y manteniendo dos sistemas propios orientados al sector textil. Uno es un sistema de inventario que gestiona eficientemente el stock de prendas, mientras que el otro es una página web de ventas con carrito de compras, diseñada para facilitar la venta de productos textiles.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>
					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Sistema de Ventas Carrito de Compras</h3>
									<h4>En desarrollo</h4>
								</span>
								<p>
									Este sistema es una página web de ventas con carrito de compras, diseñada específicamente para la venta de prendas textiles, ofreciendo una experiencia de usuario intuitiva y optimizada. Ambas aplicaciones están desarrolladas utilizando tecnologías como C#, ASP.NET y SQL Server, lo que me permite implementar soluciones robustas y escalables para pequeñas y medianas empresas en la industria de la moda.
								</p>
								<p>
									Caracteristicas Principales 👇
								</p>
								<ul className={career.list}>
									<li>
										Product attribute and settings automated testing
										<span className={career.subList}><span className={career.bullet}></span>Eradicated critical data input errors</span>
									</li>
									<li>
										Inventory management reporting and automation
										<span className={career.subList}><span className={career.bullet}></span>Decreased purchasing labour by ~80%</span>
									</li>
									<li>
										Sales management plugin with AJAX shopping cart integration
										<span className={career.subList}><span className={career.bullet}></span>Increased AOV by 8.3%</span>
									</li>
									<li>
										Bespoke ID verification software and WooCommerce integration
										<span className={career.subList}><span className={career.bullet}></span>Decreased Credit Card fraud by 98%</span>
									</li>
								</ul>
								<Badges list={freelancer} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
								</span>
								<p>
									El primero es un sistema de inventario que permite gestionar y controlar el stock de prendas textiles de manera eficiente, facilitando la administración de entradas y salidas.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						<div className={career.position}>
							<div className={career.positionContent}>
									<span className={career.positionHeader}>
										<h3>Front End Developer & User Interface Designer</h3>
										<h4>Apr 2019 - Feb 2020 · 11 mos</h4>
									</span>
								<p>
									I was brought on to help fill multiple creative rolls in a small start-up
									environment. Working with the marketing team to create the brand and logos —
									designing and developing a new front end for the website — and improving the users
									experience and store KPIs through design and merchandising optimizations.
								</p>
								<p>
									Some key projects completed during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Full functionality interactive shopping cart to replace cart page
										<span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span>
									</li>
									<li>Complex multi-state animated menus represented in an elegant UI
										<span className={career.subList}><span className={career.bullet}></span>Strong brand confidence booster with state of the art menu</span>
									</li>
									<li>
										Design and development of the site and merchandising strategy optimized for
										market
										<span className={career.subList}><span className={career.bullet}></span>7.1% overall conversion rate </span>
									</li>
								</ul>
								<Badges list={stack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Valiant S.A.C.</h3>
								<h4>Freelancer</h4>
								<h4>15 Mayo 2024 - Actualmente</h4>
								<h5>Santa Anita, Lima, Perú</h5>
							</span>
							<p>
								El primero es un sistema de inventario que permite gestionar y controlar el stock de prendas textiles de manera eficiente, facilitando la administración de entradas y salidas.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.companyPositions}>
						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Director of Product Design and Development</h3>
									<h4>Nov 2021 - Present · 1 yrs 3 mos</h4>
								</span>
								<p>
									I am responsible for the ideation, planning, and development of new consumer
									goods—and customer and employee facing microservice software. During these projects
									I work with key stakeholders within our company and supplychain to ensure and meet
									quality goals across multiple domains.
								</p>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						<div className={career.position}>
							<div className={career.positionContent}>
								<span className={career.positionHeader}>
									<h3>Full Stack Developer & User Index Designer</h3>
									<h4>Feb 2020 - Nov 2021 · 1 yrs 10 mos</h4>
								</span>
								<p>
									As the lead full stack developer I am responsible for all software development,
									CI/CD, and QA. This is for the front end, APIs, and the back end. Additionally I was
									tasked with identifying and analyzing weak points in the customer journey and
									employee workflows. Each project had to be estimated and prioritized based on its
									workload and immediate impact to efficiency or revenue. Some of these projects have
									been so successful internally that we have planned refactoring for
									commercialization.
								</p>
								<p>
									Some key projects complete during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Product attribute and settings automated testing
										<span className={career.subList}><span className={career.bullet}></span>Eradicated critical data input errors</span>
									</li>
									<li>
										Inventory management reporting and automation
										<span className={career.subList}><span className={career.bullet}></span>Decreased purchasing labour by ~80%</span>
									</li>
									<li>
										Sales management plugin with AJAX shopping cart integration
										<span className={career.subList}><span className={career.bullet}></span>Increased AOV by 8.3%</span>
									</li>
									<li>
										Bespoke ID verification software and WooCommerce integration
										<span className={career.subList}><span className={career.bullet}></span>Decreased Credit Card fraud by 98%</span>
									</li>
								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>

						<div className={career.position}>
							<div className={career.positionContent}>
									<span className={career.positionHeader}>
										<h3>Front End Developer & User Interface Designer</h3>
										<h4>Apr 2019 - Feb 2020 · 11 mos</h4>
									</span>
								<p>
									I was brought on to help fill multiple creative rolls in a small start-up
									environment. Working with the marketing team to create the brand and logos —
									designing and developing a new front end for the website — and improving the users
									experience and store KPIs through design and merchandising optimizations.
								</p>
								<p>
									Some key projects completed during this time 👇
								</p>
								<ul className={career.list}>
									<li>
										Full functionality interactive shopping cart to replace cart page
										<span className={career.subList}><span className={career.bullet}></span>Increased conversions by 0.7%</span>
									</li>
									<li>Complex multi-state animated menus represented in an elegant UI
										<span className={career.subList}><span className={career.bullet}></span>Strong brand confidence booster with state of the art menu</span>
									</li>
									<li>
										Design and development of the site and merchandising strategy optimized for
										market
										<span className={career.subList}><span className={career.bullet}></span>7.1% overall conversion rate </span>
									</li>
								</ul>
								<Badges list={stack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Another Creative Ltd.</h3>
								<h4>Contract Part-time</h4>
								<h4>Jun 2016 - Present · 6 yrs 8 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
							</span>
							<p>
								Another Creative is a full stack agency that helps deliver exceptional digital
								experiences to small and medium businesses. Branding, Marketing, and Web/Software
								Development.
							</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>

					<article className={career.company}>
						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>West Coast Electronics</h3>
								<h4>Permanent Full-time</h4>
								<h4>Jan 2006 - Nov 2011 · 5 yrs 11 mos</h4>
								<h5>Vancouver, British Columbia, Canada</h5>
							</span>
							<p>I was the Electronics Wizard 🧙‍♂️</p>
							<p>West Coast Electronics was a repair shop that fixed computers, consoles, and cell
								phones.</p>
						</div>
						<div className={career.companyAlt}></div>
					</article>
				</section>
			</Container>
		</Section>
	)
}

const fullStack = [
	{key: 'javascript', name: 'JavaScript', type: 'devicon'},
	{key: 'nodejs', name: 'NodeJS', type: 'devicon'},
	{key: 'react', name: 'React', type: 'devicon'},
	{key: 'nextjs', name: 'NextJS', type: 'devicon'},
	{key: 'php', name: 'PHP', type: 'devicon'},
	{key: 'wordpress', name: 'WordPress', type: 'devicon'},
	{key: 'woocommerce', name: 'WooCommerce', type: 'devicon'},
	{key: 'html5', name: 'HTML5', type: 'devicon'},
	{key: 'css3', name: 'CSS3', type: 'devicon'},
	{key: 'sass', name: 'SASS', type: 'devicon'},
	{key: 'git', name: 'Git', type: 'devicon'},
	{key: 'mysql', name: 'MySQL', type: 'devicon'},
	{key: 'mongodb', name: 'MongoDB', type: 'devicon'},
]

const freelancer = [
	{key: 'csharp', name: 'C#', type: 'devicon'},
	{key: 'dotnetcore', name: 'Asp.Net', type: 'devicon'},
	{key: 'microsoftsqlserver', name: 'SQL Server', type: 'devicon'},
	{key: 'bootstrap', name: 'Bootstrap', type: 'devicon'},
	{key: 'jetbrains', name: 'Jet Brains', type: 'devicon'},
	{key: 'git', name: 'Git', type: 'devicon'},
	{key: 'github', name: 'GitHub', type: 'devicon'}
]

const stack = [
	{key: 'javascript', name: 'JavaScript', type: 'devicon'},
	{key: 'nodejs', name: 'NodeJS', type: 'devicon'},
	{key: 'react', name: 'React', type: 'devicon'},
	{key: 'nextjs', name: 'NextJS', type: 'devicon'},
	{key: 'php', name: 'PHP', type: 'devicon'},
	{key: 'wordpress', name: 'WordPress', type: 'devicon'},
	{key: 'woocommerce', name: 'WooCommerce', type: 'devicon'},
	{key: 'html5', name: 'HTML5', type: 'devicon'},
	{key: 'css3', name: 'CSS3', type: 'devicon'},
	{key: 'sass', name: 'SASS', type: 'devicon'},
	{key: 'git', name: 'Git', type: 'devicon'},
	{key: 'mysql', name: 'MySQL', type: 'devicon'},
	{key: 'mongodb', name: 'MongoDB', type: 'devicon'},
]