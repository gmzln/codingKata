import { House } from '../Kata/House';
import { echoParts, randomParts, recitePoems} from '../Kata/recitePoems';

class App {}

const house = new House();
// const recitePoem = recitePoems(house.getParts());
// const echoPoem = echoParts(house.getParts());
const newShuffledArray = randomParts(house.getParts());
const randomPoem = recitePoems(newShuffledArray);
const echoRandomPoem = echoParts
console.log(randomPoem);

