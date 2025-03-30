import { Box, Typography } from "@mui/material";
import Image from "next/image";
// import OurHospitals from "../../(components)/OurHospitals"
import Entries from "./entries";
import { API, HName } from "@/app/(components)/Global";
import { fetchNewsAndEvents } from "@/lib/fetchData";

const page = async () => {
    const HoName = HName();
    const news = await fetchNewsAndEvents();
    // const OurHospitals = await fetchHospitals();
    return (<>
        <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
            <Image src={`${API}${HoName}News/newsEventsBack.jpg`} alt="background" fill style={{ objectFit: "cover" }} sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
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
                    NEWS & EVENTS
                </Typography>
            </Box>
        </Box>
        <Box display="flex"  justifyContent="center" marginY={4}>
            <Entries news={news}/>
        </Box>
    </>)
}
export default page;