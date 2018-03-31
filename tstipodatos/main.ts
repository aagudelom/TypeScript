let swSuperMan:boolean = true;
let swBatman:boolean;
let swAcuaman:boolean = true;

if ( swSuperMan ) {
  console.log("Estamos salvados!!");
} else {
  console.log("Ooop");
}

swSuperMan = convertirClarck();

if ( swSuperMan ) {
  console.log("Estamos salvados!!");
} else {
  console.log("Ooop");
}

function convertirClarck() {
  return false;
}
