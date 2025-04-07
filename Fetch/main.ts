const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
  return data
}

let button: HTMLButtonElement | null = document.querySelector('.btnInfo') as HTMLButtonElement;

let paragraph: HTMLParagraphElement | null = document.querySelector('.info') as HTMLParagraphElement;

button?.addEventListener('click', async () => {
  const data = await fetchData();
  if (data) {
    paragraph!.innerHTML = JSON.stringify(data);
  }
}
);