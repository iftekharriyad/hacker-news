
import ErrorOutlineSharpIcon from '@mui/icons-material/ErrorOutlineSharp';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import ReplayIcon from '@mui/icons-material/Replay';
import Container from '@mui/material/Container'

const createStyles = makeStyles(theme=>({
    paper:{
        padding:"10px",
        display:'flex',
        flexDirection:"column",
        alignItems:'center',
        justifyContent:'center'
    },
    errorIcon:{
        fontSize:"4em",
        marginBottom:".5em"
    },
    button:{
        marginTop:"1.5em",
        marginBottom:"1.5em"
    },
    dropZoneContainer:{
        marginTop:"6em",
        marginBottom:"7.5em",
      }
}))

export default function Error(){
    const classes = createStyles()
    return(
    <Container id="compress" maxWidth="sm" className={classes.dropZoneContainer}>
        <Paper elevation={0} square className={classes.paper}>
            <ErrorOutlineSharpIcon className={classes.errorIcon} color='error'/>
            <Typography variant='h5'>Ops! Something went wrong</Typography>
            <Button
                href="/"
                variant="contained"
                className={classes.button}
                startIcon={<ReplayIcon/>}
            >Try again</Button>
        </Paper>
    </Container>
    )
}