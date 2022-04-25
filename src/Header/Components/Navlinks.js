import './Navlinks.css';
function Navlinks(props) {
    return(
        <div>
            <div className='backdrop ' onClick={props.onClick}></div>
        <nav className='nav_navlinks'>
            <ul className='Mainmenuconent'>
                <div className='Headerguest'>
                    <button className='signupbutton'>
                        <span className='signuptext'>Sign Up</span>
                    </button>
                    <li>
                        <button className='loginbutton'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" class="css-ql88re-MenuButton"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.498 14.498V13.5H5a1.5 1.5 0 010-3h5.498V9.498a1 1 0 011.64-.768l3 2.5a1 1 0 010 1.536l-3 2.5a1 1 0 01-1.64-.768zm1.504 3.002h5.496v-11h-5.496a1.5 1.5 0 010-3h6.996a1.5 1.5 0 011.5 1.5v14a1.5 1.5 0 01-1.5 1.5h-6.996a1.5 1.5 0 010-3z"></path></svg>
                            <span className='logintext'>Login</span>
                        </button>
                    </li>   
                </div>
                <div className='MenuContents'>
                    <hr className='seperator'></hr>
                    <li>
                        <a href='#' className='menuitems'>
                            <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" class="css-1qumf7v-MenuLink"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.305 4.197c.594-.594.891-.891 1.234-1.003a1.5 1.5 0 01.927 0c.342.112.64.409 1.233 1.003l6.098 6.1c.26.26.39.389.482.54.082.135.143.28.18.434.041.172.041.356.041.723V18.1c0 .84 0 1.26-.163 1.58a1.5 1.5 0 01-.656.656c-.32.164-.74.164-1.581.164h-1.7c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 01-.655-.655C14 19.36 14 18.94 14 18.1v-.5c0-.56 0-.84-.109-1.054a1 1 0 00-.437-.437c-.214-.11-.494-.11-1.054-.11h-.8c-.56 0-.84 0-1.054.11a1 1 0 00-.437.437C10 16.76 10 17.04 10 17.6v.5c0 .84 0 1.26-.163 1.58a1.5 1.5 0 01-.656.656c-.32.164-.74.164-1.581.164H5.9c-.84 0-1.26 0-1.581-.164a1.5 1.5 0 01-.656-.655C3.5 19.36 3.5 18.94 3.5 18.1v-6.106c0-.367 0-.55.041-.723.037-.153.098-.3.18-.434.093-.151.223-.28.482-.54l6.102-6.1z"></path></svg>
                        
                            </span>
                            <span className='Menutext'>Stores</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='menuitems'>
                            <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" class="css-1qumf7v-MenuLink"><path d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 00-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 000 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68zm-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>

                            </span>
                            <span className='Menutext'>Your account</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='menuitems'>
                        <img srcset="https://www.instacart.com/image-server/24x24/www.instacart.com/assets/express/badges/bolt-gold@3x-ff5fe97de1da8afe6518f47d53c33500e4938cbe67af5ab413a3e40a64e36ade.png, https://www.instacart.com/image-server/36x36/www.instacart.com/assets/express/badges/bolt-gold@3x-ff5fe97de1da8afe6518f47d53c33500e4938cbe67af5ab413a3e40a64e36ade.png 1.5x, https://www.instacart.com/image-server/48x48/www.instacart.com/assets/express/badges/bolt-gold@3x-ff5fe97de1da8afe6518f47d53c33500e4938cbe67af5ab413a3e40a64e36ade.png 2x, https://www.instacart.com/image-server/72x72/www.instacart.com/assets/express/badges/bolt-gold@3x-ff5fe97de1da8afe6518f47d53c33500e4938cbe67af5ab413a3e40a64e36ade.png 3x, https://www.instacart.com/image-server/96x96/www.instacart.com/assets/express/badges/bolt-gold@3x-ff5fe97de1da8afe6518f47d53c33500e4938cbe67af5ab413a3e40a64e36ade.png 4x" alt="Try Instacart Express" class="css-yax0xm-MenuLink"/>

                            <span className='Menutext'>Try Orangekart Express</span>
                        </a>    
                    </li>
                    <hr className='seperator'></hr>
                    <h2 class="menuheading">Credits and promos</h2>
                    <ul className='creditpromos'>
                        <li className='creditpromositems'>
                            <a href='#'>
                                <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" class="css-1qumf7v-MenuLink"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 2.5a3.24 3.24 0 012.25.905A3.25 3.25 0 0117.25 7H19a1.5 1.5 0 011.5 1.5V11H13V9h-2v2H3.5V8.5A1.5 1.5 0 015 7h1.75a3.25 3.25 0 013-4.5zm4.5 4.5A1.25 1.25 0 1013 5.75V7h1.25zM11 5.75V7H9.75A1.25 1.25 0 1111 5.75zM3.5 13H11v7.5H5A1.5 1.5 0 013.5 19v-6zm9.5 0h7.5v6a1.5 1.5 0 01-1.5 1.5h-6V13z"></path></svg>

                                </span>
                                <span className='Menutext'>Buy gift cards</span>
                            </a>
                        </li>
                        <li className='creditpromositems'>
                            <button className='addpromobutton'>
                                <span className='svgpromo'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" class="css-ql88re-MenuButton"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.95 12.564a1.5 1.5 0 000 2.122l5.365 5.364a1.5 1.5 0 002.121 0l7.841-7.842a1.5 1.5 0 00.42-.815l.704-4.24a1.5 1.5 0 00-.42-1.306l-1.828-1.829a1.5 1.5 0 00-1.306-.419l-4.24.705a1.5 1.5 0 00-.815.419l-7.841 7.841zm13.229-5.69a1.5 1.5 0 11-2.122 2.122 1.5 1.5 0 012.122-2.122z"></path></svg>

                                </span>
                                <span className='Menutext'>Add Promo or Gift Card</span>
                            </button>
                        </li>
                    </ul>
                    <hr className='seperator'></hr>
                    <h2 class="menuheading">Support</h2>
                    <ul className='creditpromos'>
                        <li className='creditpromositems'>
                            <a href='#'>
                                <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" class="css-1qumf7v-MenuLink"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.18 3.9C7.422 2.75 9.319 2 12 2c2.682 0 4.579.751 5.82 1.9 1.217 1.127 1.68 2.531 1.68 3.6v2.063A2 2 0 0121 11.5v3a2 2 0 01-1.5 1.937V17.5c0 .74-.21 1.817-.883 2.752C17.89 21.262 16.69 22 15 22h-3.5a1.5 1.5 0 010-3H15c.711 0 1.01-.263 1.183-.502.227-.315.317-.738.317-.998v-1.063A2 2 0 0115 14.5v-3a2 2 0 011.5-1.937V7.5c0-.264-.137-.86-.72-1.4C15.222 5.583 14.119 5 12 5s-3.221.582-3.78 1.1c-.583.54-.72 1.136-.72 1.4v2.063A2 2 0 019 11.5v3a2 2 0 01-2 2H5a2 2 0 01-2-2v-3a2 2 0 011.5-1.937V7.5c0-1.069.463-2.473 1.68-3.6z"></path></svg>

                                </span>
                                <span className='Menutext'>Help Center</span>
                            </a>
                        </li>
                        <li className='creditpromositems'>
                            <button className='addpromobutton'>
                                <span className='svgpromo'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" class="css-1qumf7v-MenuLink"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 9c0 2.22-1.207 4.16-3 5.197V16a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1.803A6 6 0 1118 9zm-7 10a1 1 0 100 2h2a1 1 0 100-2h-2z"></path></svg>
                                
                                </span>
                                <span className='Menutext'>How Orangekart Works</span>
                            </button>
                        </li>
                    </ul>
                    <hr className='seperator'></hr>
                </div>
            </ul>
        </nav>
    </div>
        
    );
}
export default Navlinks;