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
  Alert,
} from "@mui/joy";
import { FormControlLabel } from "@mui/material";
import Message from "../components/Message";
import { LuMessageCircle } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = () => {
    if (!formData.privacyConsent || !formData.notRobot) {
      toast.error(
        "Please consent to the Privacy Policy and confirm you are not a robot."
      );
      return;
    }
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required.");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    toast.success("Thank you for contacting us. We will get back to you soon.");
    navigate("/");
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        mt: 15,
        p: 3,
        borderRadius: "md",
        boxShadow: "lg",
        bgcolor: "background.body",
      }}
    >
      <Typography level="h1" sx={{ mb: 2 }}>
        Contact Us
      </Typography>
      <Typography level="h4" sx={{ mb: 2 }}>
        Contact us for your next dream vacation in Nepal. We help you design and
        create a tailor-made holiday experience with a dedicated travel expert.
        Our team of experts takes care of every detail, letting you focus on
        enjoying your trip of a lifetime. Plus, we have developed our own
        round-the-clock support system, which keeps you safe and informed at
        every step.
      </Typography>
      <Typography level="h4" sx={{ mb: 3 }}>
        Feel free to contact us using the form below.
      </Typography>
      <Message>
        <LuMessageCircle style={{ fontSize: 30 }} /> SEND US YOUR MESSAGE.
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
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          placeholder="Enter your message..."
          value={formData.message}
          onChange={handleChange}
          minRows={4}
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

      <Button
        onClick={handleSubmit}
        variant="solid"
        color="primary"
        sx={{ width: "100%" }}
      >
        Send <IoIosSend style={{ fontSize: 20, marginLeft: 5 }} />
      </Button>
    </Box>
  );
};

export default ContactPage;
