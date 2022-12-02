import CarouselContainer from "../Components/CarouselContainer";
import Grid from '@mui/material/Grid';
import Gallery from "../Components/Gallery";
import Jobs from "../Components/Jobs";
import NestedGrid from "../Components/Mainsponsors";
import Album from "../Components/Copyright";
import PauseOnHover from "../Components/CardScroll"
import Stat from "../Components/Stat";
import PlatinumPart from "../Components/PlatinumPart";
import GoldPart from "../Components/GoldPart";
import SilverPart from "../Components/SilverPart";
import BronzePart from "../Components/BronzePart";
import TechPart from "../Components/TechPart";
import DigitalPart from "../Components/DigitalPart";


function Home() {
    return(
        <div>
            <CarouselContainer/>
            <PlatinumPart/>
            <GoldPart/>
            <SilverPart/>
            <BronzePart/>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                <TechPart/>
                </Grid>
                <Grid item xs={8}>
                <DigitalPart/>
                </Grid>
            </Grid>
            <Album/>
            <Title/> 
            <Stat/>
            <Album/>
            {/*<NestedGrid/> */}

        </div>
    )
}

export default Home;