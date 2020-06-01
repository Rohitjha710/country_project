import { createGlobalStyle} from 'styled-components';
//light
//hsl(209, 23%, 22%)


//dark
//hsl(207, 26%, 17%)
const GlobalStyle = createGlobalStyle`
.container-heading, .heading{
    background-color:${props=>props.theme.mode==='light'?'':' hsl(209, 23%, 22%)'};
    color:${props=>props.theme.mode==='light'?'':'hsl(0, 0%, 100%)'};
}
.search-filter{
    background-color:${props=>props.theme.mode==='light'?'':'hsl(207, 26%, 17%)'};
    color:${props=>props.theme.mode==='light'?'':'hsl(0, 0%, 100%)'};
    border-top:${props=>props.theme.mode==='light'?'':'none'};
}
.search-box{
    background-color: ${props=>props.theme.mode==='light'?'':'hsl(209, 23%, 22%)'};
 box-shadow:${props=>props.theme.mode==='light'?'':'none'};
 border: ${props=>props.theme.mode==='light'?'':'1px solid hsl(209,23%,25%)'};
}
input,select{
    color:${props=>props.theme.mode==='light'?'':'white'};
}
.region-options{
    background-color:${props=>props.theme.mode==='light'?'':'hsl(209, 23%, 22%)'};
    box-shadow:${props=>props.theme.mode==='light'?'':'none'};
    border:${props=>props.theme.mode==='light'?'':'none'};
}
.countries{
    background-color:${props=>props.theme.mode==='light'?'':'hsl(207, 26%, 17%)'};
}
.country-homepage{
    background-color:${props=>props.theme.mode==='light'?'':'hsl(209, 23%, 22%)'};
    color:${props=>props.theme.mode==='light'?'':'hsl(0, 0%, 100%)'};
    box-shadow:${props=>props.theme.mode==='light'?'':'4px 4px hsl(209, 23%, 24%);'};
}
.country-details-homepage{
    color:${props=>props.theme.mode==='light'?'':'hsl(0, 0%, 100%)'};
   
}
.country-details-homepage p{
    color:${props=>props.theme.mode==='light'?'':'hsl(0, 0%, 70%)'};
   
}
.country-details-main-section,html{
    background-color:${props=>props.theme.mode==='light'?'':'hsl(207, 26%, 17%)'};
    border-top: ${props=>props.theme.mode==='light'?'':'4px outset hsl(207, 26%, 18%)'};

}
`;
export default GlobalStyle;