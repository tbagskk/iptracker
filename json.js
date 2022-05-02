
latitude=0;

function getvalue()
{
	
	
	var input= document.getElementById("in").value;
	if (input)
	
	var ip=input;
	var api_key="at_vg5IKQlEVvq26zxnczvrsuGFMqctL"
	var api_url = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_vg5IKQlEVvq26zxnczvrsuGFMqctL&ipAddress='+ip;
	var request = new XMLHttpRequest();
	
  
	
	request.open('GET', api_url);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		  var reponse_ip = request.response;
		  var ip_adress = reponse_ip.ip;
		  var pays= reponse_ip.location.country;
		  var horraire = reponse_ip.location.timezone;
		  var fournisseur = reponse_ip.isp;
		  latitude = reponse_ip.location.lat;
		  longitude = reponse_ip.location.lng;
		  var ville=reponse_ip.location.city;
		  console.log(ville);
		  
		  

		  
		  	var ip_doc=document.getElementById("ip_doc");
			var country_doc=document.getElementById("country_doc");
			var horraire_doc=document.getElementById("horraire_doc");
			var isp_doc=document.getElementById("isp_doc");
			var latitude_doc=document.getElementById("latitude");
			var longitude_doc=document.getElementById("longitude");
			

			ip_doc.innerHTML=ip_adress;
			country_doc.innerHTML=pays+","+ville;
			horraire_doc.innerHTML=horraire;
			isp_doc.innerHTML=fournisseur;
			latitude.innerHTML=latitude;
			longitude.innerHTML=longitude;


			
		
				var map = L.map('map').setView([latitude,longitude], 13);
				var marker = L.marker([latitude, longitude]).addTo(map);

				L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
				    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
				    maxZoom: 18,
				    id: 'mapbox/streets-v11',
				    tileSize: 512,
				    zoomOffset: -1,
				    accessToken: 'pk.eyJ1IjoidGJhZ3NrIiwiYSI6ImNsMm5laGNhOTF6dnYzYnA5MGJtMXpvcngifQ._0rxrMjSKfFcl1mgeHFYmw'
				}).addTo(map);
			

			




	
		  
		  
		}
	

}


