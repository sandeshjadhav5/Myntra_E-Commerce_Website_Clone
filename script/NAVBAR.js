let navbar = () => {
  return `
  <nav class="flex space-between">
  <div class="left flex items-center rk_menu">
  <a href="../index.html">
  <img
      src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png"
      alt=""
    />
               </a>
    <ul class="flex items-center justify-center uppercase semibold">
      <li>
        <a href="">MEN</a>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px">
          <h4>Topwear</h4>
          <li><a href="">T-shirts</a></li>
          <li><a href="">Casual shirts</a></li>
          <li><a href="">Formal shirts</a></li>
          <li><a href="">Sweat shirts</a></li>
          <li><a href="">Sweaters</a></li>
          <li><a href="">Jackets</a></li>
          <li><a href="">Blazers & coats</a></li>
          <li><a href="">Suits</a></li>
          <li><a href="">Rain Jackets</a></li>
          <hr />
          <h4>Indian & Festive wear</h4>
          <li><a href="">Kurtas & kurta sets</a></li>
          <li><a href="">Sherwanis</a></li>
          <li><a href="">Nehru Jackets</a></li>
          <li><a href=""></a></li>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:180px">
        <h4>Bottom wear</h4>
        <li><a href="">Jeans</a></li>
        <li><a href="">Casual Trousers</a></li>
        <li><a href="">Formal Trousers</a></li>
        <li><a href="">Shorts</a></li>
        <li><a href="">Track pants & Joggers</a></li>
        <hr />
        <h4>Innerwear & Sleepwear</h4>
        <li><a href="">Briefs & Trunks</a></li>
        <li><a href="">Boxers</a></li>
        <li><a href="">Vests</a></li>
        <li><a href="">Sleepwear & Loungewear</a></li>
        <li><a href="">Thermals</a></li><br><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:420px">
          <h4>Footwear</h4>
          <li><a href="">Casual Shoes</a></li>
          <li><a href="">Sports Shoes</a></li>
          <li><a href="">Formal Shoes</a></li>
          <li><a href="">Sneakers</a></li>
          <li><a href="">Sandals & Floaters</a></li>
          <li><a href="">Flip Flops</a></li>
          <li><a href="">Socks</a></li>
          <hr />
          <h4>Personal Care & Grooming</h4>
          <h4>Sunglasses & Frames</h4>
          <h4>Watches</h4>
          <h4>Indian & Festive wear</h4>
          <h4>Style & Brand wear</h4><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:670px">
          <h4>Sports & Active Wear</h4>
          <li><a href="">Sports Shoes</a></li>
          <li><a href="">Sports Sandals</a></li>
          <li><a href="">Active T-Shirts</a></li>
          <li><a href="">Track Pants & Shorts</a></li>
          <li><a href="">Tracksuits</a></li>
          <li><a href="">Jackets & Sweatshirts</a></li>
          <li><a href="">Swimwear</a></li>
          <hr />
          <h4>Gadgets</h4>
          <li><a href="">Smart Wearables</a></li>
          <li><a href="">Fitness Gadgets</a></li>
          <li><a href="">Headphones</a></li>
          <li><a href="">Speakers</a></li><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:920px">
          <h4>Fashion Accessories</h4>
          <li><a href="">Wallets</a></li>
          <li><a href="">Belts</a></li>
          <li><a href="">Perfumes & Body Mists</a></li>
          <li><a href="">Trimmers</a></li>
          <li><a href="">Deodorants</a></li>
          <li><a href="">Ties,Cufflinks & Pocket Squares</a></li>
          <li><a href="">Caps & Hats</a></li>
          <li><a href="">Phone Cases</a></li>
          <li><a href="">Rings & Wristwear</a></li>
          <li><a href="">Helmets</a></li>
        
          <hr />
          <h4>Indian & Festive wear</h4><br>
        </ul>
      </li>
      <li>
        <a href="">WOMEN</a>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px">
          <h4>Topwear</h4>
          <li><a href="">T-shirts</a></li>
          <li><a href="">Casual shirts</a></li>
          <li><a href="">Formal shirts</a></li>
          <li><a href="">Sweat shirts</a></li>
          <li><a href="">Sweaters</a></li>
          <li><a href="">Jackets</a></li>
          <li><a href="">Blazers & coats</a></li>
          <li><a href="">Suits</a></li>
          <li><a href="">Rain Jackets</a></li>
          <hr />
          <h4>Indian & Festive wear</h4>
          <li><a href="">Kurtas & kurta sets</a></li>
          <li><a href="">Sherwanis</a></li>
          <li><a href="">Nehru Jackets</a></li>
          <li><a href=""></a></li>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:180px">
        <h4>Bottom wear</h4>
        <li><a href="">Jeans</a></li>
        <li><a href="">Casual Trousers</a></li>
        <li><a href="">Formal Trousers</a></li>
        <li><a href="">Shorts</a></li>
        <li><a href="">Track pants & Joggers</a></li>
        <hr />
        <h4>Innerwear & Sleepwear</h4>
        <li><a href="">Briefs & Trunks</a></li>
        <li><a href="">Boxers</a></li>
        <li><a href="">Vests</a></li>
        <li><a href="">Sleepwear & Loungewear</a></li>
        <li><a href="">Thermals</a></li><br><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:420px">
          <h4>Footwear</h4>
          <li><a href="">Casual Shoes</a></li>
          <li><a href="">Sports Shoes</a></li>
          <li><a href="">Formal Shoes</a></li>
          <li><a href="">Sneakers</a></li>
          <li><a href="">Sandals & Floaters</a></li>
          <li><a href="">Flip Flops</a></li>
          <li><a href="">Socks</a></li>
          <hr />
          <h4>Personal Care & Grooming</h4>
          <h4>Sunglasses & Frames</h4>
          <h4>Watches</h4>
          <h4>Indian & Festive wear</h4>
          <h4>Style & Brand wear</h4><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:670px">
          <h4>Sports & Active Wear</h4>
          <li><a href="">Sports Shoes</a></li>
          <li><a href="">Sports Sandals</a></li>
          <li><a href="">Active T-Shirts</a></li>
          <li><a href="">Track Pants & Shorts</a></li>
          <li><a href="">Tracksuits</a></li>
          <li><a href="">Jackets & Sweatshirts</a></li>
          <li><a href="">Swimwear</a></li>
          <hr />
          <h4>Gadgets</h4>
          <li><a href="">Smart Wearables</a></li>
          <li><a href="">Fitness Gadgets</a></li>
          <li><a href="">Headphones</a></li>
          <li><a href="">Speakers</a></li><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:920px">
          <h4>Fashion Accessories</h4>
          <li><a href="">Wallets</a></li>
          <li><a href="">Belts</a></li>
          <li><a href="">Perfumes & Body Mists</a></li>
          <li><a href="">Trimmers</a></li>
          <li><a href="">Deodorants</a></li>
          <li><a href="">Ties,Cufflinks & Pocket Squares</a></li>
          <li><a href="">Caps & Hats</a></li>
          <li><a href="">Phone Cases</a></li>
          <li><a href="">Rings & Wristwear</a></li>
          <li><a href="">Helmets</a></li>
        
          <hr />
          <h4>Indian & Festive wear</h4><br>
        </ul>
      </li>
      <li>
        <a href="">KIDS</a>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px">
          <h4>Topwear</h4>
          <li><a href="">T-shirts</a></li>
          <li><a href="">Casual shirts</a></li>
          <li><a href="">Formal shirts</a></li>
          <li><a href="">Sweat shirts</a></li>
          <li><a href="">Sweaters</a></li>
          <li><a href="">Jackets</a></li>
          <li><a href="">Blazers & coats</a></li>
          <li><a href="">Suits</a></li>
          <li><a href="">Rain Jackets</a></li>
          <hr />
          <h4>Indian & Festive wear</h4>
          <li><a href="">Kurtas & kurta sets</a></li>
          <li><a href="">Sherwanis</a></li>
          <li><a href="">Nehru Jackets</a></li>
          <li><a href=""></a></li>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:180px">
        <h4>Bottom wear</h4>
        <li><a href="">Jeans</a></li>
        <li><a href="">Casual Trousers</a></li>
        <li><a href="">Formal Trousers</a></li>
        <li><a href="">Shorts</a></li>
        <li><a href="">Track pants & Joggers</a></li>
        <hr />
        <h4>Innerwear & Sleepwear</h4>
        <li><a href="">Briefs & Trunks</a></li>
        <li><a href="">Boxers</a></li>
        <li><a href="">Vests</a></li>
        <li><a href="">Sleepwear & Loungewear</a></li>
        <li><a href="">Thermals</a></li><br><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:420px">
          <h4>Footwear</h4>
          <li><a href="">Casual Shoes</a></li>
          <li><a href="">Sports Shoes</a></li>
          <li><a href="">Formal Shoes</a></li>
          <li><a href="">Sneakers</a></li>
          <li><a href="">Sandals & Floaters</a></li>
          <li><a href="">Flip Flops</a></li>
          <li><a href="">Socks</a></li>
          <hr />
          <h4>Personal Care & Grooming</h4>
          <h4>Sunglasses & Frames</h4>
          <h4>Watches</h4>
          <h4>Indian & Festive wear</h4>
          <h4>Style & Brand wear</h4><br>
        </ul>
      </li>
      <li style="width: 135px">
        <a href="">HOME & LIVING </a>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px">
          <h4>Topwear</h4>
          <li><a href="">T-shirts</a></li>
          <li><a href="">Casual shirts</a></li>
          <li><a href="">Formal shirts</a></li>
          <li><a href="">Sweat shirts</a></li>
          <li><a href="">Sweaters</a></li>
          <li><a href="">Jackets</a></li>
          <li><a href="">Blazers & coats</a></li>
          <li><a href="">Suits</a></li>
          <li><a href="">Rain Jackets</a></li>
          <hr />
          <h4>Indian & Festive wear</h4>
          <li><a href="">Kurtas & kurta sets</a></li>
          <li><a href="">Sherwanis</a></li>
          <li><a href="">Nehru Jackets</a></li>
          <li><a href=""></a></li>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:180px">
        <h4>Bottom wear</h4>
        <li><a href="">Jeans</a></li>
        <li><a href="">Casual Trousers</a></li>
        <li><a href="">Formal Trousers</a></li>
        <li><a href="">Shorts</a></li>
        <li><a href="">Track pants & Joggers</a></li>
        <hr />
        <h4>Innerwear & Sleepwear</h4>
        <li><a href="">Briefs & Trunks</a></li>
        <li><a href="">Boxers</a></li>
        <li><a href="">Vests</a></li>
        <li><a href="">Sleepwear & Loungewear</a></li>
        <li><a href="">Thermals</a></li><br><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:420px">
          <h4>Footwear</h4>
          <li><a href="">Casual Shoes</a></li>
          <li><a href="">Sports Shoes</a></li>
          <li><a href="">Formal Shoes</a></li>
          <li><a href="">Sneakers</a></li>
          <li><a href="">Sandals & Floaters</a></li>
          <li><a href="">Flip Flops</a></li>
          <li><a href="">Socks</a></li>
          <hr />
          <h4>Personal Care & Grooming</h4>
          <h4>Sunglasses & Frames</h4>
          <h4>Watches</h4>
          <h4>Indian & Festive wear</h4>
          <h4>Style & Brand wear</h4><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:670px">
          <h4>Sports & Active Wear</h4>
          <li><a href="">Sports Shoes</a></li>
          <li><a href="">Sports Sandals</a></li>
          <li><a href="">Active T-Shirts</a></li>
          <li><a href="">Track Pants & Shorts</a></li>
          <li><a href="">Tracksuits</a></li>
          <li><a href="">Jackets & Sweatshirts</a></li>
          <li><a href="">Swimwear</a></li>
          <hr />
          <h4>Gadgets</h4>
          <li><a href="">Smart Wearables</a></li>
          <li><a href="">Fitness Gadgets</a></li>
          <li><a href="">Headphones</a></li>
          <li><a href="">Speakers</a></li><br>
        </ul>
      </li>
      <li>
        <a href="">BEAUTY</a>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px">
          <h4>Topwear</h4>
          <li><a href="">T-shirts</a></li>
          <li><a href="">Casual shirts</a></li>
          <li><a href="">Formal shirts</a></li>
          <li><a href="">Sweat shirts</a></li>
          <li><a href="">Sweaters</a></li>
          <li><a href="">Jackets</a></li>
          <li><a href="">Blazers & coats</a></li>
          <li><a href="">Suits</a></li>
          <li><a href="">Rain Jackets</a></li>
          <hr />
          <h4>Indian & Festive wear</h4>
          <li><a href="">Kurtas & kurta sets</a></li>
          <li><a href="">Sherwanis</a></li>
          <li><a href="">Nehru Jackets</a></li>
          <li><a href=""></a></li>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:180px">
        <h4>Bottom wear</h4>
        <li><a href="">Jeans</a></li>
        <li><a href="">Casual Trousers</a></li>
        <li><a href="">Formal Trousers</a></li>
        <li><a href="">Shorts</a></li>
        <li><a href="">Track pants & Joggers</a></li>
        <hr />
        <h4>Innerwear & Sleepwear</h4>
        <li><a href="">Briefs & Trunks</a></li>
        <li><a href="">Boxers</a></li>
        <li><a href="">Vests</a></li>
        <li><a href="">Sleepwear & Loungewear</a></li>
        <li><a href="">Thermals</a></li><br><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:420px">
          <h4>Footwear</h4>
          <li><a href="">Casual Shoes</a></li>
          <li><a href="">Sports Shoes</a></li>
          <li><a href="">Formal Shoes</a></li>
          <li><a href="">Sneakers</a></li>
          <li><a href="">Sandals & Floaters</a></li>
          <li><a href="">Flip Flops</a></li>
          <li><a href="">Socks</a></li>
          <hr />
          <h4>Personal Care & Grooming</h4>
          <h4>Sunglasses & Frames</h4>
          <h4>Watches</h4>
          <h4>Indian & Festive wear</h4>
          <h4>Style & Brand wear</h4><br>
        </ul>
        <ul class="rk_one" style="background-color:#ffff;padding-top:20px;padding-right:15px;margin-left:670px">
          <h4>Sports & Active Wear</h4>
          <li><a href="">Sports Shoes</a></li>
          <li><a href="">Sports Sandals</a></li>
          <li><a href="">Active T-Shirts</a></li>
          <li><a href="">Track Pants & Shorts</a></li>
          <li><a href="">Tracksuits</a></li>
          <li><a href="">Jackets & Sweatshirts</a></li>
          <li><a href="">Swimwear</a></li>
          <hr />
          <h4>Gadgets</h4>
          <li><a href="">Smart Wearables</a></li>
          <li><a href="">Fitness Gadgets</a></li>
          <li><a href="">Headphones</a></li>
          <li><a href="">Speakers</a></li><br>
        </ul>
      </li>
      <li>
        <a href="">STUDIO</a>
        <ul style="background-color:#ffff;padding-top:20px;padding-right:15px;width:400px;margin-left:-70px">
          <li>
            <p style="margin-top: 30px; width: 500px; font-weight: bold">
              Your daily inspiration for everything fasion
            </p>
            <img
              style="height: 300px; width: 400px; margin-top: 20px;margin-left:-20px;"
              src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
              alt=""
            />
            <button
              style="
                padding: 15px 20px 15px 20px;
                font-size: 14px;
                margin-top: 10px;
                margin-left:70px;
                width: 200px;
              "
            >
              EXPLORE STUDIO >
            </button>
          </li>
        </ul>
      </li>
      <p
        style="
          margin-left: -10px;
          font-size: 12px;
          margin-top: -10px;
          color: rgb(246, 46, 80);
        "
      >
        NEW
      </p>
    </ul>
  </div>

  <div class="right flex items-center">
    <!-- <i class="fa-light fa-magnifying-glass"></i> -->
    <!-- <img
      src="https://toppng.com/uploads/preview/free-icons-png-instagram-search-icon-white-11562954322qzcobg6iwo.png"
      alt=""
    /> -->
    <input
      type="text"
      class="search"
      placeholder="Search for products,brands and more"
    />
    <div class="rightbox">
    
      

      <div class="profile mx-2">
      
        <img
          src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"
          alt="" id="rk_profile"
        />profile
       
      </div>
       </a>

      <div  class="wishlist mx-2">
        <img
          src="https://static.thenounproject.com/png/3386813-200.png"
          alt=""
        />Wishlist
      </div>
      <div id="goToBag" class="bag mx-2">
      
        <img
          src="https://cdn-icons-png.flaticon.com/512/687/687259.png"
          alt=""
        />Bag
        </a>
      </div>
    </div>
  </div>
</nav>
  
  `;
};

export {navbar};
