import Paper from '@mui/material/Paper';
import PulsanteImmagine from './PulsanteImmagine';

export default function MyPaper({ label="Labello", label2=<div>&nbsp;</div>,
        componentA=<PulsanteImmagine Img="PennaModifica.svg"/>,
        componentB=<PulsanteImmagine Img="CestinoElimina.svg"/>, 
}) {

    return (
        <Paper
            elevation={4}
            sx={{
                width: "80%",
                height: "70px",
                maxHeight: "70px",
                //border: "1px solid black",
                //dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "10px",
            }}
        >
            <div style={{ 
                    flexDirection: "column", 
                    color: "var(--Notion-title, #333437)",
                    fontFamily: "Inter",
                    fontSize: "15px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "normal",
                    letterSpacing: "-0.24px" }}>

                <p style={{fontSize: "20px",}}>{label}</p>
                <p style={{fontSize: "15px",}}>
                {label2}</p>
            </div>
            <div style={{ align: "left" }}>
                {componentA}
                {componentB}
            </div>
        </Paper>
    );
}