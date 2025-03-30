// "use client";
import { Box, Grid } from "@mui/material";
import NewsCard from "../../(components)/NewsCard";
import { API,HName } from "@/app/(components)/Global";

const Entries = (props) => {
    const HoName = HName();
    const {news} = props;
    return (
        <Box display="flex" flexDirection="column" alignItems="center" width='100%' margin="auto">
            <Grid container spacing={3} justifyContent="start" display='flex' sx={{ width: { md: '80%', sm: '100%' } }}>
                {news.map((entry) => (
                    <Grid key={entry.id} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                        <NewsCard
                            title={entry.title}
                            text={entry.descreption}
                            image={`${API}${HoName}News/${entry.path || "news1.jpeg"}`} // ✅ Dynamic image handling
                            date={entry.news_event_date}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Entries;
