export function getHeaders() {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
  
    const headers = new Headers({
      "ngrok-skip-browser-warning": "69420",
      // 'Referrer-Policy': 'no-referrer',
    })
    headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));
    headers.set("ngrok-skip-browser-warning", "69420");
    
    return headers;
  }
  