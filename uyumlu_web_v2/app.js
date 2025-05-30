
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();
  const output = `
    <h2>Analiz Sonucu</h2>
    <ul>
      <li><strong>Standart:</strong> EN 17072</li>
      <li><strong>Testler:</strong> Stabilite Testi, Hijyen Testi</li>
      <li><strong>Risk:</strong> Kayma, devrilme, yetişkin gözetimsiz kullanım</li>
    </ul>`;
  document.getElementById("sonuc").innerHTML = output;
});
