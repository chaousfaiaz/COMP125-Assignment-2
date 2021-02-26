

  function copyBillingAddress() {
      var billingInputElements = document.querySelectorAll("#billingAddress input");
      var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
      if (document.getElementById("sameAddr").checked) 
      {
        for (var i = 0; i < billingInputElements.length; i++) 
        {
          deliveryInputElements[i + 1].value = billingInputElements[i].value;
        } 
        document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
      }else 
      {
        for (var i = 0; i < billingInputElements.length; i++) 
        {
          deliveryInputElements[i + 1].value = "";
        }
        document.querySelector("#deliveryAddress select").selectedIndex = -1;
      }
  }

  document.getElementById("sameAddr").addEventListener('change', function(){ copyBillingAddress(); });
  function getBillingAddress() {
       var billingInputElements = document.querySelectorAll("#billingAddress input");
      var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
      if (document.getElementById("sameAddr").checked)  {
          document.getElementById("delivFName").value = document.getElementById("billFName").value;
document.getElementById("delivLName").value = document.getElementById("billLName").value;
document.getElementById("delivStreet").value = document.getElementById("billStreet").value;
document.getElementById("delivCity").value = document.getElementById("billCity").value;
document.getElementById("delivProvince").selectedIndex = document.getElementById("billProvince").selectedIndex;
document.getElementById("delivZip").value = document.getElementById("billZip").value;
document.getElementById("delivPhone").value = document.getElementById("billPhone").value;
  }

