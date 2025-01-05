import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, Alert } from "@mui/material";
import { useChangePasswordMutation } from "../slices/userApiSlice"; // Import the mutation

const ChangePasswordDialog = ({ open, onClose }) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [changePassword, { isLoading, isError, isSuccess, error: apiError }] = useChangePasswordMutation();

  const handleSubmit = async () => {
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }
  
    try {
      setError(""); 
      const response = await changePassword({ currentPassword, newPassword }).unwrap();
      setSuccess(response.message); 
      setTimeout(() => {
        onClose(); 
        setSuccess(""); 
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
      }, 2000);
    } catch (err) {
      console.error("Password change error:", err);
      const errorMessage = err?.data?.message || err?.message || "An error occurred while changing the password.";
      setError(errorMessage); 
    }
  };
  

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
        
        <TextField
          label="Current Password"
          type="password"
          fullWidth
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="New Password"
          type="password"
          fullWidth
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Confirm New Password"
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary" variant="contained" disabled={isLoading}>
          {isLoading ? "Changing..." : "Change Password"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChangePasswordDialog;
