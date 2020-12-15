import "./Page.css";
import Footer from './Footer';

const Page = ( { children, footer } )=>{
   const hofset =  (59*((footer&&true)?1:0));
    let cssStyles = {
       "height": (hofset >  0)? `calc(100vh - ${hofset}px)`:'100%',
       "marginbottom": (hofset > 0) ? `41px`: '0px',
    }
    
    console.log(cssStyles)
    return(
        <section className="page">
            <section className="content" style={cssStyles}>{children}</section>
            {(footer && true ? (<Footer></Footer>) : null)}
        </section>
    )
} 

export default Page;