import React from 'react';
import { Slide } from 'react-slideshow-image';
import useStyles from './styles';
import 'react-slideshow-image/dist/styles.css';
import './style.css';


const Slideshow = () => {
    const classes = useStyles();
    return (
      <main className={classes.content} style={{backgroundColor:"#FFFFFF"}}>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{backgroundImage: `url("https://images.squarespace-cdn.com/content/v1/565e2ce0e4b0d50dfc8c5e9a/1535763483605-WG2Z5HGGSFKFDO9YZDA9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/CJLA+Carly+Jean+Los+Angeles+Rachel+Wakefield+Los+Angeles+Lifestyle+Brand+Photographer-13.jpg?format=2500w")`,color:'white'}}>
            
            <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{fontWeight:'300',letterSpacing:'0.15em',fontSize:'50px'}}>LOREM IPSUM DOLORSE</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <div class="container">
            <a href="#" class="button--animated">Hover me!</a>
            </div>
            </div>

            </div>
          </div>
          <div className="each-slide">
          <div style={{backgroundImage: `url("https://i.ytimg.com/vi/hlKpb1WUjlA/maxresdefault.jpg")`,color:'white'}}>

          <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{fontWeight:'300',letterSpacing:'0.15em',fontSize:'50px'}}>LOREM IPSUM DOLORSE</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <div class="container">
            <a href="#" class="button--animated">Hover me!</a>
            </div>
            </div>


            </div>
          </div>
          <div className="each-slide">
          <div style={{backgroundImage: `url("https://iso.500px.com/wp-content/uploads/2015/09/breath_cover.jpeg")`,color:'white'}}>

          <div style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <h1 style={{fontWeight:'300',letterSpacing:'0.15em',fontSize:'50px'}}>LOREM IPSUM DOLORSE</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
            <div class="container">
            <a href="#" class="button--animated">Hover me!</a>
            </div>
            </div>

            </div>
          </div>
        </Slide>
      </main>
    )
}

export default Slideshow;