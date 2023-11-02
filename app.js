const genBtn = document.getElementById('btn');
const cardBody = document.getElementById('card');
console.log(cardBody);

genBtn.addEventListener('click', () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  cardBody.style.backgroundColor = `#${randomColor}`;
  console.log(randomColor);
}
);

