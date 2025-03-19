import { Box, Typography } from "@mui/material";
import NewsLink from "./NewsLink"
const WhatsHappening = () => {
    return(<>
    <Box paddingLeft={4} marginY={5}>
        <Typography variant="h5" fontWeight="bold" marginBottom={3}>
            Find out what’s happening
        </Typography>
        <NewsLink/>
    </Box>
    </>)
}
export default WhatsHappening;