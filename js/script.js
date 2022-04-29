// Viene fornito un array di oggetti che rappresentano i membri del team.
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    image: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    image: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    image: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    image: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    image: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    image: "barbara-ramos-graphic-designer.jpg",
  },
];

// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
//MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < team.length; i++) {
  const teamMember = team[i];
  // console.log(teamMember);
  console.log(teamMember.name, teamMember.role, teamMember.image);

  //MILESTONE 2:
  // stampare le stesse informazioni su DOM sottoforma di stringhe
  const container = document.getElementById("team-container");
  // console.log(container);
  const memberString = document.createElement("div");
  memberString.innerHTML = `${teamMember.name} ${teamMember.role} ${teamMember.image}`;
  container.appendChild(memberString);
}

//BONUS 1:
// trasformare la stringa foto in una immagine effettivaBONUS 2:
// organizzare i singoli membri in card/schedeBONUS 3:
// Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un nuovo oggetto, il quale viene inserito nell'array iniziale e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
