let Bag_Nav = `<div id="parent_RR">
      <img
        id="logo_RR"
        src="https://images.indianexpress.com/2021/01/myntra.png"
        alt=""
      />

      <div>
            <div><h4><a href="">BAG</a></h4></div>
            <div><h4><a href="">------<span>ADDRESS</span>------</a></h4></div>
            <div><h4><a href="">PAYMENT</a></h4></div>
      </div>

      <div>
        <img
          src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
          alt=""
        />
        <p>100% Secure</p>
      </div>
    </div>
    <hr></hr>`;

let nav = document.querySelector("nav");
nav.innerHTML = Bag_Nav;

export { Bag_Nav };
