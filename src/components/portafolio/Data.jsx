import pinguino_css from "../../assets/css/pinguino/pinguino.png";
import tribute1 from "../../assets/html/tribute_page/imagen1.jpg";
import tribute2 from "../../assets/html/tribute_page/imagen2.png";
import encuesta1 from "../../assets/html/formulario_encuesta/encuesta1.jpg";
import doctec1 from "../../assets/html/documentacion_tecnica/doctec1.jpg";
import atep1 from "../../assets/html/aterrizaje_prod/atep1.jpg";
import copyhouse from "../../assets/html/copyhouse/logo.png";
import repositorio from "../../assets/html/repositorio/logo.png";

export const projectsData = [
    /*css*/
    {
        id: 1,
        image: pinguino_css,
        title: 'variables de pinguino',
        imgmodal: pinguino_css,
        category: 'CSS',
        link: 'https://variable-pinguino-html-css.vercel.app/',
        descripcion: 'Este proyecto de pinguino esta hecho con variables de css',
        viñeta1: 'Este trabajo es prueba de examen de Freecodecamp.',
    },
    /*fin css*/

    /*html*/
    {
        id: 2,
        image: tribute1,
        title: 'Pagina de Tributo',
        category: 'HTML',
        imgmodal: tribute2,
        link: 'https://jimi-hendrix-tribute-page-freecodecamp.vercel.app/',
        descripcion: 'Esta Pagina de Tributo esta hecho con html y css',
        viñeta1: 'Este trabajo es prueba de examen de Freecodecamp.',
    },
    {
        id: 3,
        image: encuesta1,
        title: 'Encuesta de Formulario',
        category: 'HTML',
        imgmodal: encuesta1,
        link: 'https://formulario-encuesta-freecodecamp.vercel.app/',
        descripcion: 'Esta encuesta de formulario esta hecho con html y css',
        viñeta1: 'Este trabajo es prueba de examen de Freecodecamp.',
    },
    {
        id: 4,
        image: doctec1,
        title: 'Documentacion Tecnica',
        category: 'HTML',
        imgmodal: doctec1,
        link: 'https://documentacion-tecnica-freecodecamp.vercel.app/',
        descripcion: 'Esta documentacion tecnica esta hecho con html y css',
        viñeta1: 'Este trabajo es prueba de examen de Freecodecamp.',
    },
    {
        id: 5,
        image: atep1,
        title: 'Aterrizaje de Producto',
        category: 'HTML',
        imgmodal: atep1,
        link: 'https://aterrizaje-producto-freecodecamp.vercel.app/',
        descripcion: 'Este aterrizaje de producto esta hecho con html y css',
        viñeta1: 'Este trabajo es prueba de examen de Freecodecamp.',
    },
    {
        id: 6,
        image: copyhouse,
        title: 'CopyHouse',
        category: 'HTML',
        imgmodal: copyhouse,
        link: 'https://copy-house-chincha.vercel.app/',
        descripcion: 'Landing Page hecho para una Imprenta',
        viñeta1: 'Este proyecto se Hizo con html, css y boostrap.',
    },
    {
        id: 7,
        image: repositorio,
        title: 'Repositorio Personal',
        category: 'HTML',
        imgmodal: repositorio,
        link: 'https://rfbs-repositorio.vercel.app/',
        descripcion: '',
        viñeta1: 'Este proyecto se Hizo con html, css y boostrap.',
    },
    /*fin html*/

];

export const projectsNav = [
    {
        name: 'Todos',
    },
    {
        name: 'HTML',
    },
    {
        name: 'CSS',
    },
    {
        name: 'Desarrollo Web',
    },
    {
        name: 'prueba'
    },
    {
        name: 'Desarrollo Movil'
    },
    {
        name: 'design'
    },
    {
        name: 'Flutter'
    }
];