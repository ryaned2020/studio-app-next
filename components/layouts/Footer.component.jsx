import React from 'react'
import styled from 'styled-components'
import FooterWidgetTitle from "../ui/FooterWidgetTitle"
import FooterColumnLinks from "../ui/FooterColumnLinks"
import CopyrightLayout from "../ui/CopyrightFooter"
const Footer = () => (
   <LayoutFooter>
   <footer className="footer pb-8">
   <div className="container">
       <div className="row">
           <div className="col-md-4">
               <a href="/" id="footer_logo">
                   <img className="footer-logo-image" src="images/logo_footer.png" alt="Nine Studio" />
               </a>
               <div className="footer-social">
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook" href="#"><i className="fa fa-facebook"></i></a>
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter" href="#"><i className="fa fa-twitter"></i></a>
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest" href="#"><i className="fa fa-pinterest"></i></a>
                   <a data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram" href="#"><i className="fa fa-instagram"></i></a>
               </div>
           </div>
           {FooterColLinks.map((item, index) => (
               <FooterColumnLinks key={index} {...item} />
           ))}
           <div className="col-md-3 mb-4">
               <div className="widget">
                   <FooterWidgetTitle title={'Conect With Us'} />
                   <div className="textwidget">
                       <p>A: 14 L.E Goulburn St, Berlin 2000Wm</p>
                       <p>P: (+88) 1990 6886</p>
                       <p>E: <a href="mailto:contact@9studio.com">contact@9studio.com</a></p>
                   </div>
                   <div className="footer-gmap">
                       <a href="#gmap-popup" className="open-popup-link">Google Map</a>
                       {/* <div id="gmap-popup" className="mfp-hide">
                           <iframe id="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.0554760559626!2d151.42366529037852!3d-32.80714560754794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b73360bf7441cf9%3A0x7d18a93f0244f271!2s14+Goulburn+St%2C+Abermain+NSW+2326%2C+Australia!5e0!3m2!1sen!2s!4v1482743874873" width="600" height="450" allowfullscreen></iframe>
                       </div> */}
                   </div>
               </div>
           </div>
       </div>
   </div>
</footer>
<CopyrightLayout />
   
   </LayoutFooter>
)

export default Footer

const FooterColLinks = [
    {
        title: 'Our Services',
        arr: [
            {
                linkName: 'Video Editing',
                url: '/'
            },
            {
                linkName: 'Image Editing',
                url: '/'
            },
            {
                linkName: '3D Product Visualization',
                url: '/'
            },
        ]
    },
    {
        title: 'Quick Links',
        arr: [
            {
                linkName: 'My Account',
                url: '/'
            },
            {
                linkName: 'Pricing',
                url: '/'
            },
            {
                linkName: 'Contact Us',
                url: '/'
            },
            {
                linkName: 'FAQs',
                url: '/'
            },
        ]
    }
   
]


const LayoutFooter = styled.footer`
.footer {
    font-family: var(--font3);
	display: block;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 40px;
    margin-top: 0;
    margin-bottom: 0;
    font-size: 15px;
	background-color: #333;
    color: #ababab;
}
.footer .row > .col-md-4,
.footer .row > .col-md-2 {
	margin-bottom: 30px;
}
.footer a {
    color: #ababab;
}
.footer a:hover {
    color: #da0e2b;
}
.footer .footer-social {
    margin-top: 30px;
	margin-bottom: 50px;
}
.footer .footer-social a {
	position: relative;
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 44px;
    text-align: center;
    border: 2px solid #585858;
    border-radius: 24px;
    margin-right: 9px;
    font-size: 16px;
    color: #ababab;
}
.footer .footer-social a:hover {
    background-color: #da0e2b;
    border-color: #da0e2b;
    color: #fff;
}
.footer .footer-social .tooltip.top .tooltip-arrow {
    border-top-color: #da0e2b;
}
.footer .footer-social .tooltip-inner {
    background-color: #da0e2b;
}

.footer .textwidget p {
    padding: 0;
    margin: 0 0 15px 0;
}
.footer .footer-gmap {
    margin-top: 35px;
}
.footer .footer-gmap a {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    font-family: Montserrat;
    font-weight: 400;
}
.footer .footer-gmap a:before {
    content: '\f041';
    font-family: FontAwesome;
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 36px;
    text-align: center;
    color: #ababab;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    border: 2px solid #595959;
    margin-right: 10px;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    -ms-transition: all .5s;
    -o-transition: all .5s;
    transition: all .5s;
}
`