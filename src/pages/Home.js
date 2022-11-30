import CarouselContainer from "../Components/CarouselContainer";
import Gallery from "../Components/Gallery";
import Jobs from "../Components/Jobs";
import NestedGrid from "../Components/Mainsponsors";
import Album from "../Components/Copyright";
import PauseOnHover from "../Components/CardScroll"
import Stat from "../Components/Stat"


function Home() {
    return(
        <div>
            <CarouselContainer/>
            <Stat/>
            <Album/>
            {/*<NestedGrid/> */}

        </div>
    )
}

export default Home;