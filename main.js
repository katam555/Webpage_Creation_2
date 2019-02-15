function loadjson(file,callback) {
  var xhr =new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }

  };
  xhr.send(null);

}
loadjson("data.json",function(text)
{
  var data = JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  educationdetails(data.education);
  technicalskills(data.technicalskills);
})
var left = document.querySelector(".leftchild");
function details(det) {
  var image = document.createElement("img");
  image.src=det.image;
  left.appendChild(image);
  var name = document.createElement("h3");
  name.textContent = det.name;
  left.appendChild(name);
  var mail = document.createElement("a");
  mail.href = "naveenkatam13@gmail.com";
  mail.textContent = det.email;
  left.appendChild(mail);
  var number = document.createElement("p");
  number.textContent = det.number;
  left.appendChild(number);
  var address = document.createElement("h3");
  address.textContent = "Address:";
  left.appendChild(address);
  var hr = document.createElement("hr");
  left.appendChild(hr);
  var address = document.createElement("h4");
  address.textContent = det.Address;
  left.appendChild(address);


}
var right = document.querySelector(".rightchild");
function careerinfo(infodata){
  var careerinfo = document.createElement("h3");
  careerinfo.textContent = "Careerinfo:";
  right.appendChild(careerinfo);
  var hr = document.createElement("hr");
  right.appendChild(hr);
  var careerinfo = document.createElement("h4");
  careerinfo.textContent = infodata.info;
  right.appendChild(careerinfo);

}
function educationdetails(edu) {
  var add = document.createElement("h3");
  add.textContent = "Educational qualification:";
  right.appendChild(add);
  var hr = document.createElement("hr");
  right.appendChild(hr);
  var table1 = document.createElement("table");
  table1.border="1";
  var tr1 = "<tr><th>Institute</th><th>Degree</th><th>Passout</th></tr>";
  var tr2 = "";
  for(var i=0;i<edu.length;i++){
    tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>"
  }
  table1.innerHTML=tr1+tr2;
  right.appendChild(table1);
}
function technicalskills(tech){
  var det = document.createElement("h3");
  det.textContent = "Technical skills:";
  right.appendChild(det);
  var hr = document.createElement("hr");
  right.appendChild(hr);
  var ul = document.createElement("ul");
  for(var i=0;i<tech.length;i++){
    var li = document.createElement("h3");
    li.textContent=tech[i].info+":"+tech[i].details;
    ul.appendChild(li);
  }
  right.appendChild(ul);
}
