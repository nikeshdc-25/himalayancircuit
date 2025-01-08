import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Typography,
} from "@mui/joy";
import { FormControlLabel } from "@mui/material";
import Message from "../components/Message";
import { useNavigate } from "react-router-dom";
import { MdUnsubscribe } from "react-icons/md";
import { toast } from "react-toastify";
import { useSubscribeEmailMutation } from "../slices/newsletterApiSlice";

const NewsletterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    privacyConsent: false,
    notRobot: false,
  });
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const [subscribe, { isLoading }] = useSubscribeEmailMutation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacyConsent || !formData.notRobot) {
      toast.error(
        "Please consent to the Privacy Policy and confirm you are not a robot."
      );
      return;
    }
    if (!formData.name || !formData.email) {
      toast.error("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    try {
      let resp = await subscribe({
        username: formData.name,
        email: formData.email,
      }).unwrap();
      toast.success(resp.message);
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.error || "An error occurred while subscribing.");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        mt: 10,
        p: 3,
        borderRadius: "md",
        boxShadow: "lg",
        bgcolor: "background.body",
      }}
    >
      <Typography level="h1" sx={{ mb: 2 }}>
        SUBSCRIBE
      </Typography>
      <Typography level="h4" sx={{ mb: 2 }}>
        STAY CONNECTED.
      </Typography>
      <Typography level="h4" sx={{ mb: 3 }}>
        Sign up for our exclusive trip announcements, travel inspiration and
        expert tips.
      </Typography>
      <Message>
        By providing your email address, you agree to receive our exclusive trip
        announcements, travel inspiration and expert tips. You can unsubscribe
        at any time.
      </Message>
      <FormControl sx={{ mb: 2 }}>
        <FormLabel>Name</FormLabel>
        <Input
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl sx={{ mb: 2 }}>
        <FormLabel>Email</FormLabel>
        <Input
          name="email"
          id="email"
          placeholder="Enter your email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl sx={{ mb: 2 }}>
        <FormControlLabel
          control={
            <Checkbox
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleChange}
              sx={{ ml: 1.3 }}
            />
          }
          sx={{ gap: 1 }}
          label={
            <>
              I have read and consent to the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                style={{ color: "#007bff" }}
                onClick={(e) => e.stopPropagation()}
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="/terms-and-conditions"
                target="_blank"
                style={{ color: "#007bff" }}
                onClick={(e) => e.stopPropagation()}
              >
                Terms & Conditions
              </a>
              *
            </>
          }
        />
      </FormControl>

      <FormControl sx={{ mb: 2 }}>
        <Checkbox
          name="notRobot"
          checked={formData.notRobot}
          onChange={handleChange}
          label="I'M NOT A ROBOT!"
        />
      </FormControl>
      <Message variant="danger">
        We'll never share your email with anyone else.
      </Message>

      <Button
        onClick={handleSubmit}
        variant="solid"
        color="success"
        sx={{ width: "100%" }}
      >
        <MdUnsubscribe style={{ fontSize: 18, marginRight: 5 }} />
        Subscribe
      </Button>
    </Box>
  );
};

export default NewsletterPage;
