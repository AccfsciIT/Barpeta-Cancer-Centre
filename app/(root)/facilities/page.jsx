import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Facilities from "../../(components)/Facilities/FacilityData"
import { API, HName } from "@/app/(components)/Global";

const page = () => {
    const HoName = HName();
    return (<>
        <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
            <Image src={`${API}${HoName}Facilities/facilities_bg.jpg`} alt="background" fill style={{ objectFit: "cover" }} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%", 
                    backgroundColor: "rgba(0, 0, 255, 0.2)",
                    color: "white",
                    padding: "12px 0",
                }}
                
            >
                <Typography variant="h4" fontWeight="bold" textshadow="2px 2px 10px rgba(0,0,0,0.5)" paddingX={3}>
                    Facilities
                </Typography>
            </Box>
        </Box>
        <Box sx={{padding:{md:4, sm: 0}}}>
            <Facilities/>
        </Box>
    </>)
}
export default page;