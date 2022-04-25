import './Sidebar.css'
import {FiChevronRight} from 'react-icons/fi'
import {MdVerified} from 'react-icons/md'
function Sidebar () {
    return (
        <div className="MainContainer">
            <div className="Shopdetails">
                <div className='shopheading'>
                    <div className='Shopimgname'>
                        <a href='#'>
                            <img srcset="https://www.instacart.com/image-server/88x88/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png, https://www.instacart.com/image-server/132x132/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png 1.5x, https://www.instacart.com/image-server/176x176/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png 2x, https://www.instacart.com/image-server/264x264/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png 3x, https://www.instacart.com/image-server/352x352/www.instacart.com/assets/domains/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png 4x" alt="" class="css-1vskc0q-Header"/>

                            <h2 class="ShopName">Sprouts Farmers Market</h2>
                        </a>
                    </div>
                    <div>
                        <a href='#' className='shopedetails'>
                            <p className='Everytext'>Every Day Shop Prize</p> 
                            <span className='lessarsymbol'>
                                <FiChevronRight size="12px" color="systemGrayscale30"/>
                            </span>
                        </a>
                    </div>
                    <button className='satisbutton'>
                        <div className='satisfaction'>
                            <MdVerified className='verified' size="12px" color="blue"/>
                            <p className='satistext'>100% satisfaction guarantee</p>
                            <span className='lessarthansymbol'>
                                <FiChevronRight size="12px" color="systemGrayscale30" margin-top="20px"/>
                            </span>
                        </div>
                    </button>
                    <hr className='seperators'></hr>
                    <ul className='shopfooter'>
                        <li className='shoprecip'>
                            <a href='#'>
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" class="css-1nuqj94-MenuLink"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.557 8.393a1.5 1.5 0 01-1.114 0L9.5 7.616l-1.936.776a1.5 1.5 0 01-.558.108H5a1.5 1.5 0 01-1.342-2.17l1-2A1.5 1.5 0 016 3.5h12a1.5 1.5 0 011.342.83l1 2A1.5 1.5 0 0119 8.5h-2.002a1.5 1.5 0 01-.558-.108l-1.94-.776-1.943.777zm-8.895 2.926c-.164.32-.164.74-.164 1.581v5.2c0 .84 0 1.26.164 1.581a1.5 1.5 0 00.655.655c.32.164.741.164 1.581.164H7.6c.84 0 1.26 0 1.581-.163a1.5 1.5 0 00.655-.656c.164-.32.164-.74.164-1.581v-.5c0-.56 0-.84.109-1.054a1 1 0 01.437-.437C10.76 16 11.04 16 11.6 16h.8c.56 0 .84 0 1.054.109a1 1 0 01.437.437C14 16.76 14 17.04 14 17.6v.5c0 .84 0 1.26.164 1.581a1.5 1.5 0 00.655.655c.32.164.74.164 1.581.164h1.698c.84 0 1.26 0 1.581-.163a1.5 1.5 0 00.656-.656c.163-.32.163-.74.163-1.581v-5.2c0-.84 0-1.26-.163-1.581a1.5 1.5 0 00-.656-.655c-.32-.164-.74-.164-1.581-.164h-12.2c-.84 0-1.26 0-1.58.164a1.5 1.5 0 00-.656.655z"></path></svg>

                                </span>
                                <span className='txtsprc'>Shop</span>
                            </a>
                        </li>
                        <li className='shoprecip'>
                            <a href='#'>
                                <span>
                                <svg width="24" height="20" viewBox="0 0 24 24" fill="#343538" xmlns="http://www.w3.org/2000/svg" size="24" class="css-1qumf7v-MenuLink"><path d="M4.287 2.5H6v19H4.287c-.158 0-.287-.208-.287-.462V2.962c0-.254.129-.462.287-.462zM11.5 2.5h-4v19h8.95c1.958 0 3.55-1.45 3.55-3.234V5.734c0-1.768-1.566-3.21-3.5-3.234v6.793a.408.408 0 01-.233.37.397.397 0 01-.414-.034l-1.715-1.233a.233.233 0 00-.276 0L12.147 9.63a.394.394 0 01-.423.035.402.402 0 01-.224-.363V2.5z"></path></svg>

                                </span>
                                <span className='txtsprc'>Recipes</span>
                            </a>
                        </li>
                    </ul>
                    <hr className='seperators'></hr>
                </div>
            </div>
            <ul className='menucontainer'>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Dairy and Eggs</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Beverages</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Meat and Seafood</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Snacks</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Frozen</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Bakery</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Dry Goods Pasta</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Oils and Spices</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Floral</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Produce</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Produce</span>
                    </a>
                </li>
                <li className='Menuitems'>
                    <a href='#'>
                        <span>Produce</span>
                    </a>
                </li>

            </ul>
        </div>
    )
}
export default Sidebar;