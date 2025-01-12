import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash } from "react-icons/fa";
import {
  useAddAboutUsContentMutation,
  useAddMemberMutation,
  useDeleteMemberMutation,
  useDeleteMemberImageMutation, // Import the delete image mutation
  useGetAboutUsContentQuery,
  useGetMemberQuery,
  useUpdateMemberMutation,
  useUploadMemberImageMutation,
} from "../../slices/aboutusApiSlice";

const QuillContainer = styled(Box)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  marginTop: theme.spacing(2),
  padding: theme.spacing(1),
  background: theme.palette.background.paper,
}));

const AboutUsEditPage = () => {
  const { data: aboutUsMembers = [], refetch } = useGetMemberQuery();
  const { data: aboutUsContent } = useGetAboutUsContentQuery();

  const [addMember] = useAddMemberMutation();
  const [updateMember] = useUpdateMemberMutation();
  const [deleteMember] = useDeleteMemberMutation();
  const [deleteMemberImage] = useDeleteMemberImageMutation(); // Hook to delete image
  const [addAboutUsContent] = useAddAboutUsContentMutation();
  const [uploadMemberImage] = useUploadMemberImageMutation();

  const [selectedMember, setSelectedMember] = useState(null);
  const [editorContent, setEditorContent] = useState(
    aboutUsContent?.content || ""
  );
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (member) => {
    setSelectedMember(
      member || {
        username: "",
        post: "",
        image: "",
        teamrank: "",
        description: "",
      }
    );
    setOpenDialog(true);
  };

  const handleCloseDialog = () => setOpenDialog(false);

  const handleSaveMember = async () => {
    try {
      const resp = selectedMember._id
        ? await updateMember({
            id: selectedMember._id,
            data: selectedMember,
          }).unwrap()
        : await addMember(selectedMember).unwrap();

      toast.success(resp.message);
      refetch();
    } catch (err) {
      toast.error(err?.data?.error || "Something went wrong");
    }
    setOpenDialog(false);
  };

  const handleDeleteMember = async (id) => {
    if (id && window.confirm("Are you sure you want to delete this member?")) {
      try {
        const resp = await deleteMember(id).unwrap();
        toast.success(resp.message);
        refetch();
      } catch (err) {
        toast.error(err.data.error);
      }
    }
  };

  const handleDeleteImage = async (imagePath) => {
    try {
      const resp = await deleteMemberImage(imagePath).unwrap();
      toast.success(resp.message);
    } catch (err) {
      toast.error(err.data.error);
    }
  };

  const handleSaveContent = async () => {
    try {
      const resp = await addAboutUsContent(editorContent).unwrap();
      toast.success(resp.message);
      refetch();
    } catch (err) {
      toast.error(err?.data?.error || "Something went wrong");
    }
  };

  const handleImageUpload = async (e) => {
    try {
      let formData = new FormData();
      Array.from(e.target.files).forEach((file) => {
        formData.append("images", file);
      });

      let resp = await uploadMemberImage(formData).unwrap();

      setSelectedMember((prevMember) => ({
        ...prevMember,
        image: resp.paths[0],
      }));

      toast.success(resp.message);
    } catch (err) {
      toast.error(err?.data?.error || "Image upload failed");
    }
  };

  useEffect(() => {
    if (aboutUsContent) {
      setEditorContent(aboutUsContent.content || "");
    }
  }, [aboutUsContent]);

  return (
    <Box p={4} sx={{ marginTop: "70px" }}>
      <Typography variant="h4" gutterBottom>
        About Us Management
      </Typography>

      <QuillContainer>
        <Typography variant="h6">About Us Content</Typography>
        <Quill value={editorContent} onChange={setEditorContent} />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveContent}
          sx={{ mt: 2 }}
        >
          Save Content
        </Button>
      </QuillContainer>

      <Box mt={4}>
        <Typography variant="h5">Team Members</Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleOpenDialog()}
        >
          Add Member
        </Button>

        <Grid container spacing={2} mt={2}>
          {aboutUsMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member._id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={member.image || "/placeholder.jpg"}
                  alt={member.username}
                />
                <CardContent>
                  <Typography variant="h6">{member.username}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Post: {member.post}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Team Rank: {member.teamrank}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => handleOpenDialog(member)}>
                    Edit
                  </Button>
                  <Button
                    size="small"
                    color="error"
                    onClick={() => {
                      handleDeleteMember(member._id);
                      handleDeleteImage(selectedMember.image);
                    }}
                  >
                    Delete
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>
          {selectedMember?._id ? "Edit Member" : "Add Member"}
        </DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={selectedMember?.username || ""}
            onChange={(e) =>
              setSelectedMember({ ...selectedMember, username: e.target.value })
            }
          />
          <TextField
            label="Post"
            fullWidth
            margin="normal"
            value={selectedMember?.post || ""}
            onChange={(e) =>
              setSelectedMember({ ...selectedMember, post: e.target.value })
            }
          />
          <Button variant="contained" component="label" sx={{ mt: 2 }}>
            Upload Image
            <input type="file" hidden onChange={handleImageUpload} />
          </Button>
          {selectedMember?.image && (
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Image URL: {selectedMember.image}
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  sx={{ ml: 1 }}
                  onClick={() => handleDeleteImage(selectedMember.image)}
                >
                  <FaTrash size={16} />
                </Button>
              </Typography>
            </Box>
          )}
          <TextField
            label="Team Rank"
            type="number"
            fullWidth
            margin="normal"
            value={selectedMember?.teamrank || ""}
            onChange={(e) =>
              setSelectedMember({ ...selectedMember, teamrank: e.target.value })
            }
          />
          <TextField
            label="Description"
            fullWidth
            margin="normal"
            value={selectedMember?.description || ""}
            onChange={(e) =>
              setSelectedMember({
                ...selectedMember,
                description: e.target.value,
              })
            }
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveMember}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AboutUsEditPage;
