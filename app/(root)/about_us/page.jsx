import { Box, Typography } from "@mui/material";
import Image from "next/image";
import OurHospitals from "../../(components)/OurHospitals"
import Entries from "./entries";

const page = () => {
    return (<>
        <Box display="flex" sx={{ position: "relative", overflow: "hidden" }} width="100%" height="300px">
            <Image src="http://localhost:3001/about/about_us.jpg" alt="background" fill style={{ objectFit: "cover" }} />
            <Typography
                sx={{
                    position: "absolute",
                    top: "80%",
                    left: "10%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    fontSize: "3rem",
                    fontWeight: "bold",
                    textShadow: "2px 2px 10px rgba(0,0,0,0.5)"
                }}
            >
                ABOUT US
            </Typography>
        </Box>
        <Box padding={4}>
            <Typography variant="h4" fontStyle="italic" marginTop={1}>Assam cancer care foundation has inaugrated 8 state-of-the-art ACCF cancer hospitals in Assam</Typography>
            <OurHospitals/>
        </Box>
        <Box padding={4}>
            <Entries/>
        </Box>
    </>)
}
export default page;