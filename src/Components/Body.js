import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Input from './Input';
import { Button, Container } from '@mui/material';
import About from './Fields';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Body(){
    return(
        <>
        {/* Company Intro in one Grid*/}
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <h1>
                        Rishi Sunak
                        </h1>
                        <h1>
                            UK Prime Minister and MP for Richmond (Yorks)
                        </h1>
                        <br></br>
                    </Item>
                </Grid>
            </Grid>

        {/* Input Elements in one Grid     */}
            <Grid container spacing={2} style={{ backgroundColor: "lightyellow" }}>
                <Grid item xs={2} style={{ backgroundColor: "lightyellow" }}>
                </Grid>
                <Grid item xs={8}>
                    <h1 style={{textAlign: 'center'}}>Live local? Keep up-to-date.</h1>
                    <Input/>
                    <p>
                        The information you provide is used in accordance with our Data Collection and Use policy. By clicking this button you agree to your information being used in accordance with that policy.
                    </p>
                    <Button>Sign up</Button> 
                </Grid>
                <Grid item xs={2}>
                </Grid> 
            </Grid>
        {/* Cards inside Conatiner */}
        <About/>
        </>
    )
}
export default Body