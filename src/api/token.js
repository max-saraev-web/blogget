export const getToken = () => {
  if (localStorage.getItem('bearer')) return localStorage.getItem('bearer');
};
