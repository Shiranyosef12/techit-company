let branches = [
    {
      name: "Haifa",
      phone: 823456788,
      address: "Derech Simcha Golan 54, Haifa, 3299001",
      activity: "Sunday through Thursday between the hours of 9 am and 5 pm",
    },
  {
      
      name: "Tel Aviv",
      phone: 823456789,
      address: "149 Dizengoff, Tel Aviv, 6346126",
      activity:
        "Sunday through Thursday between the hours of 8 am and 8 pm",
    },
    {
      name: "New! Eilat",
      phone: 823456786,
      address: "Hayam Mall, 1 Palmach, 8802501",
      activity:
        "Sunday through Thursday between the hours of 8 am and 9 pm",
    },
];
  

function setModalBranches() {
  for (let i = 0; i < branches.length; i++){
      // document.getElementById("title").innerText = branches[i].name;
  document.getElementById("mbody").innerHTML = `
  <p><b>Phone Number:</b> ${branches[i].phone}</p><p><b>Address:</b> ${branches[i].address}</p><p><b>Activity:</b> ${branches[2].activity}</p>`;
    }
};