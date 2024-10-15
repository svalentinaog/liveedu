import { Link } from "react-router-dom";
import { Box, Grid } from "@mui/system";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import {
  commonStyles,
  gridElements,
  formField,
  btnSubmit,
} from "../styles/mui";
import InputPasswordField from "../components/InputPasswordField";
import useUserAuthentication from "../viewmodels/useUserAuthentication";

export default function SignIn() {
  const { user, methods } = useUserAuthentication();

  return (
    <Grid container spacing={2}>
      {/* Section 1 */}
      <Grid
        size={{ sm: 6 }}
        sx={{
          ...commonStyles,
          height: "100vh",
          display: { sm: "block", xs: "none" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            background: "linear-gradient(#bfc3fc, #a2c3fc)",
            borderRadius: "0 150px 150px 0",
          }}
        ></Box>
      </Grid>

      {/* Section 2 */}
      <Grid
        size={{ sm: 6, xs: 12 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "space-between", md: "center", sm: "center" },
          alignItems: "center",
          minHeight: "100vh",
          padding: 2,
          gap: { xs: 0, md: 6, sm: 6 },
        }}
      >
        {/* Content */}
        <Box
          sx={{
            ...commonStyles,
            ...gridElements,
            height: { xs: "70vh", md: "auto", sm: "auto" },
          }}
        >
          <Box
            sx={{
              ...commonStyles,
              ...gridElements,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Welcome back
            </Typography>
            <Typography variant="body1">
              Sign in to an existing account using your phone number
            </Typography>
          </Box>

          <FormControl
            sx={{
              ...commonStyles,
              ...gridElements,
            }}
          >
            <TextField
              label="Email or Phone Number"
              value={user.signUp_email || user.signUp_phone}
              sx={formField}
            />

            <InputPasswordField
              label="Password"
              value={user.signIn_password}
              onChange={methods.updateField("signIn_password")}
              sx={formField}
            />
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "flex-end", md: "center", sm: "center" },
            height: { xs: "auto", md: "auto", sm: "auto" },
            ...gridElements,
          }}
        >
          <Button
            size="large"
            sx={{ ...btnSubmit, width: "100%" }}
            variant="contained"
          >
            Login
          </Button>

          <Typography variant="subtitle1">
            Don't have an account? <Link to="/sign-up">Sign Up</Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
