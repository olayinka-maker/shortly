import React from 'react'
import facebook from '../../images/icon-facebook.svg';
import twitter  from '../../images/icon-twitter.svg';
import pinterest from '../../images/icon-pinterest.svg';
import instagram from '../../images/icon-instagram.svg';
import footerIcon from '../../images/logo.svg'
import './footer.css'


const Footer = () => {
  return (
    <>
    <footer style={{ backgroundColor:'hsl(255, 11%, 22%)'}}>
        <div className='footer-container'> 
               <h2 className='bottom-shortly'>Shortly</h2>
        <div className='properties'>
            <article>
                <h3>Features</h3>
                <ul className='footerClass'>
                    <li> Links Shortening </li>
                    <li> Branded Links</li>
                    <li> Analytics</li>
                </ul>
            </article>

            <article>
                <h3>Resources</h3>
                <ul className='footerClass'>
                    <li> Blogs </li>
                    <li> Developers</li>
                    <li> Support</li>
                </ul>
            </article>

            <article>
                <h3>Company</h3>
                <ul className='footerClass'>
                    <li> About </li>
                    <li> Our Team</li>
                    <li> Careers</li>
                    <li> Contact</li>
                </ul>
            </article>

            <article>
                <ul className='icons'>
                    <li><img src={facebook} alt='facebook'/></li>
                    <li><img src={twitter} alt='twitter'/></li>
                    <li><img src={pinterest} alt='pinterest'/></li>
                    <li><img src={instagram} alt='insta'/></li>
                </ul>
            </article>
           </div>
        </div>
    </footer>
    </>
  )
}

export default Footer;