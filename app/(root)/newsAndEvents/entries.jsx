"use client";
import { Box, Grid, Typography } from "@mui/material";
import NewsCard from "../../(components)/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../(components)/Loader";
import { API, HospitalID, HName } from "@/app/(components)/Global";
import { fetchNewsAndEvents } from "@/lib/fetchData";

const Entries = () => {
    const HoName = HName();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNews = async () => {
        setLoading(true);
        try {
            const data = await fetchNewsAndEvents();
            setNews(data || []); // ✅ Ensure it's an array
        } catch (error) {
            console.error("Error fetching About Us data:", error);
            setNews([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    if (loading) {
        return <><Loader /></>;
    }

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
