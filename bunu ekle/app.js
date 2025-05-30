
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const output = `
    <h2>Analiz Sonucu</h2>
    <ul>
      <li><strong>Standart:</strong> EN 71-3</li>
      <li><strong>Testler:</strong> Kurşun Analizi, Alevlenebilirlik</li>
      <li><strong>Risk:</strong> Küçük parça riski (3 yaş altı)</li>
    </ul>`;
  document.getElementById("sonuc").innerHTML = output;
});
