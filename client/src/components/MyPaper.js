import Paper from '@mui/material/Paper';

export default function MyPaper() {
    return (
        <Paper
        elevation={4}
        sx={{
            paddingTop: '100px',
            width: "35%",
            height: "100px",
            dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
            marginBottom: "20px", // Add margin bottom for spacing
        }}
        />
    );
}