import Group from "./grupo.js";
import Person from "./persona.js";

let g1 = new Group();

let marcelino = new Person(1, "Marcelino");
let fernando = new Person(2, "Fernando");
let ana = new Person(3, "Ana");
let alejandro = new Person(4, "Alejandro");
let luis = new Person(5, "Luis");
let juan = new Person(6, "Juan");

g1.add(marcelino);
g1.add(fernando);
g1.add(ana);
g1.add(alejandro);
g1.add(luis);
g1.add(juan);

g1.toList();