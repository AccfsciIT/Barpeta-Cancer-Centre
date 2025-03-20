"use client";
import { Box, Grid, Typography } from "@mui/material";
import NewsCard from "../../(components)/NewsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../(components)/Loader";

const Entries = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchNews = async () => {
        setLoading(true);
        try {
            const result = await axios.post('https://barpetacancercentre.org/api/get-news-events-for-center', { ccode: 'Barpeta' });
            setNews(result.data || []);
        } catch (err) {
            console.error("Error fetching data:", err);
        } finally {
            setLoading(true);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    if (loading) {
        return <><Loader/></>;
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center" maxWidth="1100px" margin="auto">
            <Grid container spacing={3} justifyContent="start">
                {news.map((entry) => (
                    <Grid key={entry.content_heading} item xs={12} sm={6} md={4} display="flex" justifyContent="center">
                        <NewsCard 
                            title={entry.content_heading} 
                            text={entry.content} 
                            image={`http://localhost:3001/${entry.imagePath || "News/news1.jpeg"}`} // ✅ Dynamic image handling
                            date={entry.news_event_date}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Entries;
