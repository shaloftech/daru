import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MetaData from "../component/layouts/MataData/MataData";
import TermsImage from "../Image/about/logo.png";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  about_us: {
    paddingTop: "8rem",
    paddingBottom: "4rem",
    backgroundColor: "white !important",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container_12: {
    padding: "2rem",
    textAlign: "center",

    backgroundColor: "white !important",
    maxWidth: "100%",
  },
  image_about: {
    width: "100%",
    height: "auto",
    marginTop: "3rem",
    marginBottom: "2rem",
  },
  title_about: {
    color: "#414141",
    fontSize: "14px",
    padding: "2rem 1rem 2rem",
    fontFamily: "Roboto",
    fontWeight: "500 !important",
  },
  heading12_about: {
    fontSize: "1rem",
    padding: "2rem 1rem 2rem",
    fontWeight: "400 !important",
    color: "#414141",
    textAlign: "center",
  },
  introText_about: {
    maxWidth: "800px",

    lineHeight: "1.5",
    margin: "1.5rem 0",
    color: "#292929",
    fontSize: "1.2rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  infoText_about: {
    lineHeight: "1.5",
    margin: "2rem 0",
    color: "#292929",
    fontSize: "1rem",
    fontWeight: "400 !important",
    textAlign: "justify",
    padding: "0.8rem 1rem",
  },
  buttonContainer_about: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem 0",
    width: "100%",
    marginTop: "1rem",
  },
  button1_about: {
    backgroundColor: "#000000 !important",
    color: "white !important",
    width: "fit-content !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "3.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
  button2_about: {
    backgroundColor: "#292929 !important",
    color: "white   !important",
    width: "fit-content     !important",
    padding: "0.8rem 2rem   !important",
    marginLeft: "1.3rem !important",
    borderRadius: "5px !important",
    "&:hover": {
      backgroundColor: "#ed1c24 !important",
      color: "white !important",
    },
  },
}));

const About_UsPage = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.about_us}>
        <MetaData title={"About Us"} />
        <Container className={classes.container_12}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={TermsImage}
                alt="CricketWeapon"
                className={classes.image_about}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className={classes.title_about}
              >
                About Us
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                DaruPani is an online liquor delivery startup launched in 2025
                with a mission to revolutionize how people purchase alcoholic
                beverages. We’ve proudly served over 5,000 happy customers
                through various digital platforms and social media. As we grow,
                we are committed to offering top-quality liquor products under
                our trusted brand name “DaruPani”.
              </Typography>
              <Typography variant="body1" className={classes.introText_about}>
                The journey of DaruPani began with an ambitious entrepreneur
                passionate about blending convenience with quality. What started
                as a small operation has now evolved into a well-known and
                reliable name in the liquor e-commerce space. With thousands of
                satisfied customers, DaruPani is now gearing up to scale
                nationally and internationally with its user-friendly website
                and a diverse range of genuine liquor products—all offered at
                competitive prices.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            At DaruPani, we specialize in delivering high-quality alcoholic
            beverages directly to your doorstep. Our platform is designed for
            adults who seek a safe, fast, and hassle-free way to browse and
            order their favorite drinks from the comfort of their home. We offer
            a wide range of liquor including whiskey, rum, wine, vodka, beer,
            and more.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Since our establishment in 2025, we’ve built a loyal customer base
            and gained recognition for our commitment to quality and service.
            Every product listed on our platform is carefully sourced from
            verified distributors and tested for authenticity. Our expert team
            ensures that what you see is exactly what you get—genuine liquor,
            fair pricing, and timely delivery.
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Our customers are at the heart of everything we do. We focus on
            long-term satisfaction by delivering a seamless shopping experience,
            easy payment options, and reliable customer support. Join us as we
            redefine convenience and trust in the world of liquor delivery.
          </Typography>
        </Container>
        <Container className={classes.container_12}>
          <Typography
            variant="h3"
            component="h1"
            className={classes.heading12_about}
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            Our mission at DaruPani is simple: to make premium liquor
            accessible, affordable, and deliverable. We believe that everyone of
            legal drinking age should have access to a reliable and transparent
            platform for buying their favorite beverages. We are committed to:
            Offering a wide selection of authentic liquor from trusted brands
            Ensuring secure packaging and timely delivery Maintaining compliance
            with local regulations, including age verification Creating a
            trusted digital space for liquor enthusiasts
          </Typography>
          <Typography variant="body1" className={classes.infoText_about}>
            DaruPani strives to be more than just a delivery service—we want to
            be your go-to companion for celebrations, relaxation, and social
            gatherings. As we continue to grow, we pledge to innovate, expand
            our product range, and keep customer satisfaction at the forefront
            of our journey.
          </Typography>

          <div className={classes.buttonContainer_about}>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button1_about}>
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "none" }}
            >
              <Button variant="contained" className={classes.button2_about}>
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
