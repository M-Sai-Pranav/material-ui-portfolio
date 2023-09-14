import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@material-ui/core/Box'; 
import { Menu } from '@material-ui/core';
import { flexbox } from '@mui/system';

function Header(){
    return(
        <>

            <Grid container spacing={3}>
                <Grid xs={3} >     
                </Grid>
                <Grid xs={2} style={{marginTop:"50px", cursor:"pointer"}}>
                    <img src="https://www.rishisunak.com/profiles/bluetree3_profile/modules/custom/bluetree_core/images/custom-logos/conservatives-blue.png?v=1" alt="" srcset="" />
                </Grid>
                <Grid xs={4 } style={{marginTop:"50px", cursor:"pointer"}}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end"}}>
                        
                            <h2>About-Me</h2>   
                            <h2>Latest News</h2>   
                            <h2>My Plan</h2>   
                            <h2>Campaigns</h2>   
                            <h2>Contact</h2>              
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
export default Header


