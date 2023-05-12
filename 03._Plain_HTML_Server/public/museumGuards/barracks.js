const guards = ["Hank the tank", "Thomas the tank engine", "CEPUS"];

function addGuard(guard) {
  guards.push(guard);
  return guards;
}

export default {
  guards,
  addGuard,
};
