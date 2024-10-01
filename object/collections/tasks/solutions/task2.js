// People with cities and population
/**
 * 
 * @param {{cities: Array<{ id: number, name: string }>, people: Array<{ name: string, city: number }>}} data 
 */
export default function (data) {
  
  const { cities, people } = data;

  const newPeopleData = people.map((person) => {
    
    const city = cities.find((city) => city.id === person.city);

    const cityPopulation = people.filter((people) => people.city === person.city).length;

    return {
      name: person.name,
      city: {
        name: city.name,
        population: cityPopulation,
      },
    };
  });

  return newPeopleData;
}
