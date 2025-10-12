const vehicles = [
  {plate:"KA01AB1234",owner:"Deepak S",rc:"RC-65783",insurance:"INS-98342",puc:"PUC-78234",expiry_rc:"2026-05-10",expiry_insurance:"2025-12-30",expiry_puc:"2024-11-01",notes:"Valid"},
  {plate:"KA02BC5678",owner:"Anjali Rao",rc:"RC-90873",insurance:"INS-56421",puc:"PUC-99913",expiry_rc:"2027-02-18",expiry_insurance:"2025-08-14",expiry_puc:"2024-10-12",notes:"Valid"},
  {plate:"KA03CD9876",owner:"Rahul Mehta",rc:"RC-23489",insurance:"INS-99822",puc:"PUC-22011",expiry_rc:"2025-09-01",expiry_insurance:"2025-04-20",expiry_puc:"2024-12-05",notes:"Insurance Expiring Soon"},
  {plate:"KA04EF3456",owner:"Sneha Kumar",rc:"RC-55567",insurance:"INS-78312",puc:"PUC-67342",expiry_rc:"2026-07-22",expiry_insurance:"2025-09-09",expiry_puc:"2025-03-15",notes:"PUC Expiring Soon"},
  {plate:"KA05GH7654",owner:"Arun Nair",rc:"RC-88888",insurance:"INS-99001",puc:"PUC-33442",expiry_rc:"2025-06-12",expiry_insurance:"2025-10-11",expiry_puc:"2024-10-15",notes:"Valid"}
];

function normalize(s){return s.replace(/\s+/g,"").toUpperCase();}

function searchVehicle(){
  const query = normalize(document.getElementById("plate").value);
  const res = vehicles.find(v=>normalize(v.plate)===query);
  if(!query){document.getElementById("output").innerHTML="<p>Please enter a vehicle number.</p>";return;}
  if(!res){document.getElementById("output").innerHTML="<p style='color:red;'>No record found for "+query+"</p>";return;}
  displayTable([res]);
}

function showAll(){
  displayTable(vehicles);
}

function displayTable(arr){
  let html = "<table><tr><th>Plate</th><th>Owner</th><th>RC</th><th>Insurance</th><th>PUC</th><th>RC Expiry</th><th>Insurance Expiry</th><th>PUC Expiry</th><th>Notes</th></tr>";
  arr.forEach(v=>{
    html+=`<tr>
      <td>${v.plate}</td><td>${v.owner}</td><td>${v.rc}</td><td>${v.insurance}</td>
      <td>${v.puc}</td><td>${v.expiry_rc}</td><td>${v.expiry_insurance}</td><td>${v.expiry_puc}</td><td>${v.notes}</td>
    </tr>`;
  });
  html+="</table>";
  document.getElementById("output").innerHTML = html;
}
