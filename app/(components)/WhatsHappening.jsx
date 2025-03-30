import { Box, Typography } from "@mui/material";
import NewsLink from "./NewsLink"
const WhatsHappening = () => {
    return (<>
        <Box marginY={4} display='flex' width='100%' justifyContent='center'>
            <Box display='flex' width='90%' flexDirection='column'>
                <Typography variant="h5" fontWeight="bold" marginY={2}>
                    What's Happening
                </Typography>
                <NewsLink />
            </Box>
        </Box>
    </>)
}
export default WhatsHappening;