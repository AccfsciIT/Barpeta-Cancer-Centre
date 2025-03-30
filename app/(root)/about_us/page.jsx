import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Entries from "./entries";
import { API, HName } from "@/app/(components)/Global";
import { fetchAboutUs } from "@/lib/fetchData";
import OurHospitalsPage from "@/app/(components)/Hospitals/OurHospitalsPage";

const page = async() => {
    const HoName = HName();
    const Entris = await fetchAboutUs();
    return (<>
        <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
            <Image
                src={`${API}${HoName}about/about_us.jpg`}
                alt="background"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />

            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%", 
                    backgroundColor: "rgba(255, 165, 0, 0.4)",
                    color: "white",
                    padding: "12px 0",
                }}
                
            >
                <Typography variant="h4" fontWeight="bold" textshadow="2px 2px 10px rgba(0,0,0,0.5)" paddingX={3}>
                    ABOUT US
                </Typography>
            </Box>

        </Box>
        <Box>
            <Typography sx={{fontSize:{md:32}}} fontStyle="italic" marginTop={1} paddingX={2}>Assam cancer care foundation has inaugrated 8 state-of-the-art ACCF cancer hospitals in Assam</Typography>
            <OurHospitalsPage/>
        </Box>
        <Box sx={{padding:{md:4, sm:1}, marginX:1}}>
            <Entries entries={Entris}/>
        </Box>
    </>)
}
export default page;