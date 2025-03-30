import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { API } from "../../(components)/Global";

const Entries = async (props) => {
  const {entries} = props;

  if (!entries || entries.length === 0) {
    return null;
  }

  return (
    <Box display="flex" flexDirection="column" width="100%">
      {entries.map((entry, index) => (
        <Grid
          key={entry.title}
          container
          width="100%"
          sx={{
            flexDirection: { md: index % 2 === 0 ? "row" : "row-reverse", xs: "column" },
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
          }}
        >
          {/* ✅ Image Section (Fixed: Parent `Box` now has `position: relative`) */}
          <Grid
            item
            xs={12}
            md={6}
            padding={{ xs: 2, md: 4 }}
            display="flex"
            width="100%"
            sx={{ overflow: "hidden" }}
          >
            <Box width="100%" sx={{ height: { xs: "150px", md: "300px" }, position: "relative" }}>
              <Image
                src={`${API}${entry.path}`}
                alt="Who we are"
                fill
                style={{ objectFit: "cover", borderRadius: 5 }}
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </Box>
          </Grid>

          {/* Text Section */}
          <Grid
            item
            xs={12}
            md={6}
            padding={{ xs: 2, md: 4 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography variant="h6" fontWeight="bold">
              {entry.title}
            </Typography>
            <Typography>
              {entry.description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default Entries;
