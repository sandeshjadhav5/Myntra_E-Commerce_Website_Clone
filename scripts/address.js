import { Bag_Nav } from "./bag_navbar.js";

function addAddress() {
      const form = document.getElementById("addressForm");
  
      const name = form.name.value;
      const mobileNo = form.mobileNo.value;
      const pincode = form.pincode.value;
      const address = form.address.value;
      const location = form.location.value;
      const city = form.data2.value;
      const state = form.data1.value;
  
      let address1 = {
          name,
          mobileNo,
          pincode,
          address,
          location,
          city,
          state
      };
      for (k in address1) {
          if (address1[k].length === 0) {
              alert("Please fill all feilds")
              return;
          }
      }
      window.location.href = "payment.html"
  }