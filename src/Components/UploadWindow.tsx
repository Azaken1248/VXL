import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Container = styled("div")({
  backgroundColor: "white",
  width: "60%",
  marginLeft: "auto",
  marginRight: "auto",
  border: "2px solid black",
  borderRadius: "10px",
  padding: "1.3rem",
  marginTop: "30%",
  "@media (max-width: 600px)": {
    width: "90%", // Adjust width for smaller screens
  },
});

const FileInfoTable = styled("table")({
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "1rem",
  maxHeight: "200px",
  overflowY: "auto",
});

const FileInfoRow = styled("tr")({
  borderBottom: "1px solid #ccc",
});

const FileInfoHeaderCell = styled("th")({
  textAlign: "left",
  padding: "0.5rem",
});

const FileInfoCell = styled("td")({
  padding: "0.5rem",
});

export default function InputFileUpload() {
  const [selectedFiles, setSelectedFiles] = React.useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileList = Array.from(files);
      setSelectedFiles(fileList);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.2em",
      }}
    >
      {selectedFiles.length > 0 && (
        <FileInfoTable>
          <tbody>
            {selectedFiles.map((file, index) => (
              <FileInfoRow key={index}>
                <FileInfoHeaderCell>File Name</FileInfoHeaderCell>
                <FileInfoCell>{file.name}</FileInfoCell>
                <FileInfoHeaderCell>File Size</FileInfoHeaderCell>
                <FileInfoCell>{file.size} bytes</FileInfoCell>
                <FileInfoHeaderCell>File Type</FileInfoHeaderCell>
                <FileInfoCell>{file.type}</FileInfoCell>
              </FileInfoRow>
            ))}
          </tbody>
        </FileInfoTable>
      )}
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        {selectedFiles.length > 0 ? "Change Files" : "Add Submission"}
        <VisuallyHiddenInput type="file" onChange={handleFileChange} multiple />
      </Button>
    </Container>
  );
}
