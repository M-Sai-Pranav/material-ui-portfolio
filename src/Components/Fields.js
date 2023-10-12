import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          m: 1,
          bgcolor: "#e0f7fa",
          color: "#e0f7fa",
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
      ),
      PropTypes.func,
      PropTypes.object,
    ]),
  };
  


function About(){
    return(
        <>
        <React.Fragment>
        <CssBaseline />
            <Container maxWidth="xl">
                

                {/* Box 1 for About, Campaigns, Media Cards  */}
                <div style={{ width: '100%' }}>
                <Box
                    sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
                >
                    <Item sx={{ width: '100%' }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://www.rishisunak.com/sites/www.rishisunak.com/files/styles/one_column/public/2020-09/Rishi%20Sunak%20park%20800x480.jpg?itok=T-shSe6p"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                About 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                
                                <Button size="small">Read More</Button>
                            </CardActions>
                        </Card>
                    </Item>
                    <Item sx={{  width: '100%' }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://www.rishisunak.com/sites/www.rishisunak.com/files/styles/one_column/public/2020-09/Rishi%20Sunak%20high%20vis%20800x480.jpg?itok=69Kbq0gE"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Campaigns 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                
                                <Button size="small">Read More</Button>
                            </CardActions>
                        </Card>
                    </Item>
                    <Item sx={{  width: '100%' }}>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://www.rishisunak.com/sites/www.rishisunak.com/files/styles/one_column/public/2020-09/Rishi%20Sunak%20Marr%20800x480.jpg?itok=eJ2dmbmA"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Media 
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    
                                    <Button size="small">Read More</Button>
                                </CardActions>
                        </Card>
                    </Item>
                    
                </Box>
                </div>

                {/* Box 2 for Latest News, My Plans, Conatct Me Cards  */}            
                <div style={{ width: '100%' }}>
                <Box
                    sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}
                >
                    <Item sx={{ width: '100%' }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://www.rishisunak.com/sites/www.rishisunak.com/files/styles/one_column/public/2020-09/Rishi%20Sunak%20library%20800x480.jpg?itok=c9FD7TY5"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Latest News 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                
                                <Button size="small">Read More</Button>
                            </CardActions>
                        </Card>
                    </Item>
                    <Item sx={{  width: '100%' }}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://www.rishisunak.com/sites/www.rishisunak.com/files/styles/one_column/public/2020-09/Rishi%20Sunak%20speech%20800x480.jpg?itok=fnT8o7FT"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                My Plans 
                                </Typography>
                            </CardContent>
                            <CardActions>
                                
                                <Button size="small">Read More</Button>
                            </CardActions>
                        </Card>
                    </Item>
                    <Item sx={{  width: '100%' }}>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image="https://www.rishisunak.com/sites/www.rishisunak.com/files/styles/one_column/public/2022-09/Swaledale4%2021.9.17%20resized.jpg?itok=s2uroXcz"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Conatct Me 
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    
                                    <Button size="small">Read More</Button>
                                </CardActions>
                        </Card>
                    </Item>
                    
                </Box>
                </div>
                    
            </Container>
        </React.Fragment>
        
        </>
    )
}
export default About