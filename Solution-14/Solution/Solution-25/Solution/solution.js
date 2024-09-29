import { employees as data } from './employees.js';

// task 1
const findEmployeesInPriceRange = (employees, { min = 0, max = Number.MAX_SAFE_INTEGER } = {}) =>
  employees
    .filter(e => e.salary >= min && e.salary <= max)
    .map(e => e.name);

// task 2
const findEmployeesByCity = (employees, city) =>
  employees
    .filter(e => e.address.city === city)
    .map(e => `${e.name}, ${e.address.street}`);

// task 3
const findByProjects = (employees, ...projectsNames) =>
  projectsNames.length > 0
    ? employees.find(e =>
      e.projects.length > 0 &&
      projectsNames.every(p => e.projects.includes(p))) ?? null
    : null;

// task 4
const getDepartments = (employees) =>
  employees.reduce((departments, { department }) =>
    departments.includes(department)
      ? departments
      : [...departments, department],
    []);

// task 5
const getProjects = (employees) =>
  employees
    .flatMap(e => e.projects)
    .reduce((projects, project) =>
      projects.includes(project)
        ? projects
        : [...projects, project],
      []);

// task 6
const getDepartmentsWithEmployeesCount = (employees) =>
  employees.reduce((group, { department }) => ({
    ...group,
    [department]: group[department] ? group[department] + 1 : 1
  }), {});


// task 7
const getEmployeeWithMaxSalary = (employees) =>
  employees.reduce((max, employee) =>
    employee.salary > max.salary ? employee : max,
    { salary: -1 });

// task 8
const getCitiesByPopulation = (employees, n) => {
  const groups = employees.reduce((cities, { address: { city } }) => ({
    ...cities,
    [city]: cities[city] ? cities[city] + 1 : 1
  }), {});

  return Object.keys(groups)
    .map(key => ({ name: key, population: groups[key] }))
    .sort((a, b) => b.population - a.population)
    .slice(0, n);
}
