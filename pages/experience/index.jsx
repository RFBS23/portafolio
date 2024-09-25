import Color from "../../components/utils/page.colors.util";
import colors from "../../content/experience/_colors.json";
import Recent from "../../components/sections/experience/experience";

export default function Index({ mediumExperience }) {
    return (
        <>
            <Color colors={colors} />
            <Recent mediumExperience={mediumExperience}/>
        </>
    )
}