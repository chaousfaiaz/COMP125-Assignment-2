function SetBilling(checked) {
	if (checked) {
        document.getElementById('deliveryAddress').style.display="none";
        document.getElementById('billFName').value = ''; 

        document.getElementById('deliveryAddress').style.display="none";
        document.getElementById('billLName').value = ''; 

        document.getElementById('deliveryAddress').style.display="none";
        document.getElementById('billStreet').value = ''; 

        document.getElementById('deliveryAddress').style.display="none";
        document.getElementById('billCity').value = ''; 

        document.getElementById('deliveryAddress').style.display="none";
        document.getElementById('billZip').value = ''; 

        document.getElementById('deliveryAddress').style.display="none";
        document.getElementById('billPhone').value = ''; 
	} else {
        document.getElementById('deliveryAddress').style.display="block";
		document.getElementById('delivFName').value = document.getElementById('billFName').value; 
        document.getElementById('delivLName').value = document.getElementById('billLName').value; 
        document.getElementById("delivStreet").value = document.getElementById("billStreet").value;
document.getElementById("delivCity").value = document.getElementById("billCity").value;
document.getElementById("delivProvince").selectedIndex = document.getElementById("billProvince").selectedIndex;
document.getElementById("delivZip").value = document.getElementById("billZip").value;
document.getElementById("delivPhone").value = document.getElementById("billPhone").value;
	}
}
function copyAddress(checked){
document.getElementById("delivFName").value = document.getElementById("billFName").value;
document.getElementById("delivLName").value = document.getElementById("billLName").value;
document.getElementById("delivStreet").value = document.getElementById("billStreet").value;
document.getElementById("delivCity").value = document.getElementById("billCity").value;
document.getElementById("delivProvince").selectedIndex = document.getElementById("billProvince").selectedIndex;
document.getElementById("delivZip").value = document.getElementById("billZip").value;
document.getElementById("delivPhone").value = document.getElementById("billPhone").value;
}