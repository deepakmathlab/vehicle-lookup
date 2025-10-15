const vehicles = [
  {plate:"KA17HN6465",owner:"Deepak S",model:"Pulsar 150",type:"Two Wheeler",rc:"RC-65783",insurance:"INS-98342",expiry_rc:"2026-05-10",expiry_insurance:"2025-12-30"},
  {plate:"KA17HS5529",owner:"Bharath B S",model:"R15 v4",type:"Two Wheeler",rc:"RC-90873",insurance:"INS-56421",expiry_rc:"2027-02-18",expiry_insurance:"2025-08-14"},
  {plate:"KA17HB6062",owner:"Nandan G S",model:"Hyundai i20",type:"Four Wheeler",rc:"RC-23489",insurance:"INS-99822",expiry_rc:"2025-09-01",expiry_insurance:"2025-04-20"},
  {plate:"KA17HO9966",owner:"Narendra K N",model:"TVS Jupiter",type:"Three Wheeler",rc:"RC-55567",insurance:"INS-78312",expiry_rc:"2024-07-22",expiry_insurance:"2024-09-09"},
  {plate:"KA05GH7654",owner:"Arun Nair",model:"Tata Nexon",type:"Four Wheeler",rc:"RC-88888",insurance:"INS-99001",expiry_rc:"2025-06-12",expiry_insurance:"2025-10-11"}
];

function normalize(s){return s.replace(/\s+/g,"").toUpperCase();}

function daysLeft(dateStr){
  const diff = new Date(dateStr) - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function statusBadge(dateStr){
  const d = daysLeft(dateStr);
  if (isNaN(d)) return "<span class='badge expired'>Invalid Date</span>";
  if (d < 0) return "<span class='badge expired'>Expired</span>";
  if (d <= 30) return `<span class='badge soon'>Expiring in ${d} days</span>`;
  return `<span class='badge ok'>Valid (${d} days left)</span>`;
}

function searchVehicle(){
  const query = normalize(document.getElementById("plate").value);
  const res = vehicles.find(v => normalize(v.plate) === query);

  if (!query) {
    document.getElementById("output").innerHTML = "<p>Please enter a vehicle number.</p>";
    return;
  }

  if (!res) {
    document.getElementById("output").innerHTML = "<p style='color:red;'>No record found for " + query + "</p>";
    return;
  }

  displayVehicle(res);
}

function displayVehicle(v){
  let html = `
  <div class="card">
    <h3>Vehicle Details for ${v.plate}</h3>
    <table>
      <tr><th>Owner Name:</th><td>${v.owner}</td></tr>
      <tr><th>Vehicle Model:</th><td>${v.model}</td></tr>
      <tr><th>Vehicle Type:</th><td>${v.type}</td></tr>
      <tr><th>RC Number:</th><td>${v.rc}</td></tr>
      <tr><th>Insurance Number:</th><td>${v.insurance}</td></tr>
      <tr><th>RC Expiry:</th><td>${v.expiry_rc} ${statusBadge(v.expiry_rc)}</td></tr>
      <tr><th>Insurance Expiry:</th><td>${v.expiry_insurance} ${statusBadge(v.expiry_insurance)}</td></tr>
    </table>
  </div>`;
  document.getElementById("output").innerHTML = html;
}
