import {heroes} from '../data/heroes'



export const getHeroesByPublisher = ({publisher}) => {
  const  validPublisher = ['DC Comics','Marvel Comics'];
  if(!validPublisher.includes(publisher)){
    throw new Error(`${publisher} is not a valid xd publisher`);
  }
  return heroes.filter((heroes)=>heroes.publisher==publisher);

  
}
