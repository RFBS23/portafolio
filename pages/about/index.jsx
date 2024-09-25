import Color from "../../components/utils/page.colors.util";
import colors from "../../content/about/_colors.json";
import Recent from "../../components/sections/about/acercade";

export default function About({ mediumAbout }) {
    return (
        <>
            <Color colors={colors} />
            <Recent mediumAbout={mediumAbout}/>
        </>
    )
}