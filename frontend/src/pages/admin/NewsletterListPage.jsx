import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useGetSubscribedEmailQuery } from "../../slices/newsletterApiSlice";

const NewsletterListPage = () => {
  const { data, isLoading, error } = useGetSubscribedEmailQuery();

  return (
    <Container maxWidth="md" sx={{ mt: 15, mb: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Newsletter Subscribers
      </Typography>

      {isLoading ? (
        <CircularProgress sx={{ display: "block", mx: "auto", mt: 2 }} />
      ) : error ? (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error.data.error}
        </Alert>
      ) : (
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((email) => (
                <TableRow key={email._id}>
                  <TableCell>{email._id}</TableCell>
                  <TableCell>{email.username}</TableCell>
                  <TableCell>{email.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default NewsletterListPage;
