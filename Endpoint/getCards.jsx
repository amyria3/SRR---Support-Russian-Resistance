export default function getCards(){
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'p0ye0rf7npro4fo4ngk37hfz1qqxuvplq1laoyub8fv532lf5prijx2h8a9p610g'
    }
  };

  async function getResponse () {fetch('https://console.neon.tech/api/v2/projects/br-quiet-sea-285524/endpoints/br-quiet-sea-285524', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));}
}