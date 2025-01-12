import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  Button,
  AspectRatio,
  CardOverflow,
} from "@mui/joy";
import trekkingImg from "../assets/customizeStatic/trekking-in-everest.jpg";
import tourImg from "../assets/customizeStatic/tour-in-nepal.jpg";
import peakClimbingImg from "../assets/customizeStatic/peak-climbing.jpg";
import culturalTourImg from "../assets/customizeStatic/cultural-tour.jpg";

function CustomizeView() {
  const categories = [
    {
      title: "Trekking",
      image: trekkingImg,
      description:
        "Trekking in Nepal is unparalleled in the world with 700 km long high Himalayan Ranges, with the trails that suits your preference, strength and stamina. The Himalayan Range in this tiny nation boasts the scenery is certainly not to be downplayed. With guided hikes past yaks, vibrant rhododendrons, stone stupas and prayer flags through 8 out of 10 of the world’s highest peaks, you can trek into the shadows of some of Earth’s most iconic and spectacular peaks.",
    },
    {
      title: "Tour",
      image: tourImg,
      description:
        "Nepal is an ancient land situated among the world's tallest mountains, the Himalayas. In this vast landscape there is a lot to explore. Nepal is well known in the world as the birthplace of Buddha, and a land where religious harmony exists.",
    },
    {
      title: "Peak Climbing",
      image: peakClimbingImg,
      description:
        "The experienced climbing guides will make your dreams fulfilled when you wish to go beyond the trekking trails and take a excursion to the peaks below 7000m. Our climbing guides make your safety and success at forefront to make you experience the adventures of your life time.",
    },
    {
      title: "Cultural Tour",
      image: culturalTourImg,
      description:
        "From temples and pagodas to monasteries and museums, you couldn’t ask for a better place to celebrate culture and history than Nepal. So come and get your cultural experiences on with one of these Cultural and Thematic tours!",
    },
  ];

  return (
    <div style={{ margin: "20px auto", padding: "0 10px" }}>
      {/* Introduction Section */}
      <Box sx={{ marginBottom: "40px" }}>
        <Typography
          level="h1"
          sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}
        >
          Himalayan Circuit Travel Inspirations
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              level="body-lg"
              sx={{ color: "text.secondary", textAlign: "justify" }}
            >
              Immerse yourself fully in Nepali nature and culture with our
              self-paced fully customized tours. Learn about Nepal’s medieval
              societies and experience the majesty of the Himalayas in an
              all-inclusive experience. Your personal, fully customizable, and
              preferred pace of tour allows you to travel in safety and comfort.
            </Typography>
            <Typography
              level="body-lg"
              sx={{
                color: "text.secondary",
                textAlign: "justify",
                marginTop: "16px",
              }}
            >
              We are determined to give you a genuine experience of Nepal; and
              it becomes more important and potentially inspiring, when visiting
              a country as unique and diverse as Nepal.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              level="body-lg"
              sx={{ color: "text.secondary", textAlign: "justify" }}
            >
              Here at Himalayan Circuit we pride ourselves on providing the most
              unique and best tours & treks in Nepal. We have pre-made tour
              packages available which can be hand crafted or alternatively we
              can build an entire trip based on your specifications.
            </Typography>
            <Typography
              level="body-lg"
              sx={{
                color: "text.secondary",
                textAlign: "justify",
                marginTop: "16px",
              }}
            >
              Our team are based locally and are experts in sustainable tourism
              and the Nepalese culture. Our goal is to make your vacation dreams
              come true.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Categories Section */}
      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography
          level="h1"
          sx={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          Customize Your Dream Vacation
        </Typography>
        <Typography level="body-lg" sx={{ color: "text.secondary" }}>
          Himalayan Circuit offers custom luxury tours and budget-friendly
          vacations in Nepal. Our local experts design personalized packages for
          trekking in the stunning mountains or exploring Nepal's rich history.
          Experience the best of Nepal with us—plan your dream adventure today!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid
            key={index}
            xs={12}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Card
              variant="outlined"
              sx={{
                width: "100%",
                maxWidth: 300,
                borderRadius: "md",
                boxShadow: "lg",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "xl",
                },
              }}
            >
              <CardOverflow>
                <AspectRatio ratio={0.8} sx={{ minWidth: 150 }}>
                  <img src={category.image} alt={category.title} />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography
                  level="h4"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {category.title}
                  <hr style={{ marginTop: 2 }} />
                </Typography>
                <Typography
                  level="body-sm"
                  sx={{
                    textAlign: "center",
                    color: "text.secondary",
                    marginBottom: 1,
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 4,
                    overflow: "hidden",
                    marginTop: -1
                  }}
                >
                  {category.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "8px",
                  }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    sx={{ fontSize: "0.85rem" }}
                  >
                    Customize
                  </Button>
                  <Button
                    variant="solid"
                    color="success"
                    fullWidth
                    sx={{ fontSize: "0.85rem" }}
                  >
                    Explore
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CustomizeView;
