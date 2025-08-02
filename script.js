function calculateLove() {
  const name1 = document.getElementById("yourName").value.trim();
  const name2 = document.getElementById("partnerName").value.trim();
  const result = document.getElementById("result");

  if (name1 === "" || name2 === "") {
    result.textContent = "Please enter both names!";
    return;
  }

  const lovePercent = Math.floor(Math.random() * 101);
  result.textContent = `Love Score: ${lovePercent}% 💖`;
}
