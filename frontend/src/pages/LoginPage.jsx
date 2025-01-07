import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Link as MuiLink,
  Avatar,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { RiAdminLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logo from "../assets/HClogo.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let resp = await login({ email, password, rememberMe }).unwrap();
      dispatch(setCredentials(resp.user));
      toast.success(resp.message);
      navigate("/");
    } catch (err) {
      toast.error(err.data.error);
    }
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: "linear-gradient(135deg, #C7C5F4, #776BCC)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xs">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 8,
              padding: 4,
              borderRadius: 2,
              boxShadow: 5,
              background: "linear-gradient(135deg, #5D54A4, #7C78B8)",
              position: "relative",
            }}
          >
            <Avatar sx={{my:-7, position: 'fixed'}}>
              <a href="/">
                <img src={logo} alt="Himalayan Circuit"/>
              </a>
            </Avatar>
            <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
              <RiAdminLine />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              color="black"
              sx={{ fontWeight: "bold" }}
            >
              Admin Login
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ mt: 1, mb: 3, fontStyle: "italic" }}
            >
              Welcome, please login through admin credentials only.
            </Typography>
            <Box
              component="form"
              onSubmit={submitHandler}
              noValidate
              sx={{ width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                color="black"
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                value={password}
                color="black"
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.1)",
                  },
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="success"
                    />
                  }
                  label="Remember Me"
                />
                <MuiLink
                  component={Link}
                  to="/forgetpass"
                  variant="body2"
                  sx={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Forget Password?
                </MuiLink>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="success"
                sx={{
                  mt: 3,
                  mb: 2,
                  padding: "12px",
                  fontWeight: "bold",
                  textTransform: "none",
                  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                LOG IN
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
