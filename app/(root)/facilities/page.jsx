import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Facilities from "../../(components)/Facilities"

const page = () => {
    return (<>
        <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="350px">
            <Image src="http://localhost:3001/Facilities/facilities_bg.jpg" alt="background" fill style={{ objectFit: "cover" }} />
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
                <Typography variant="h4" fontWeight="bold" textShadow="2px 2px 10px rgba(0,0,0,0.5)" paddingX={3}>
                    Facilities
                </Typography>
            </Box>
        </Box>
        <Box padding={4}>
            <Facilities/>
        </Box>
    </>)
}
export default page;