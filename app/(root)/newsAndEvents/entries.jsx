"use client";
import { Box, Grid, Typography } from "@mui/material"
import NewsCard from "../../(components)/NewsCard";
import { useEffect, useState } from "react";
import {HospitalID, API} from "../../(components)/Global";

const Entries = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`${API}api/news_events?HospitalID=${HospitalID}`);
                const data = await response.json();
                if (response.ok) {
                    setNews(data.result);
                    console.log("News=", data.result);
                } else {
                    console.error("Error:", data.error);
                }
            } catch (error) {
                console.error("Failed to fetch hospital details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (<>
        <Box display="flex" paddingX={5} flexDirection="column" width="100%" justifyContent="center" alignItems="center">
            <Grid container>
                {news.map((Entry, index) => {
                    return (<Grid key={Entry.title} item xs={4} display="flex" justifyContent="center" marginBottom={2}>
                        <NewsCard title={Entry.title} text={Entry.description} image={Entry.path} loading={loading}/>
                    </Grid>)
                })}
            </Grid>
        </Box>
    </>)
}
export default Entries