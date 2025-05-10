async function carregarIdioma(codigo) {
  try {
    const resposta = await fetch('dados/lang.json');
    const traducoes = await resposta.json();

    const idioma = traducoes[codigo] || traducoes['pt']; // fallback para PT

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const chave = el.getAttribute('data-i18n');
      if (idioma[chave]) el.innerText = idioma[chave];
    });
  } catch (erro) {
    console.error("Erro ao carregar o idioma:", erro);
  }
}

function detectarIdioma() {
  const browserLang = navigator.language.slice(0, 2).toLowerCase();
  const suportados = ['pt', 'en', 'fr', 'de', 'es'];
  return suportados.includes(browserLang) ? browserLang : 'pt';
}
