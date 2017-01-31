console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(pieces, ...substitutions) {
  var result = pieces[0];
  for (var i = 0; i < substitutions.length; ++i) {
    result += replaceEsacpeSequence(substitutions[i]) + pieces[i + 1];
  }

  return result;
}

function replaceEsacpeSequence(inputString) {
  var outputString = inputString.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
  return outputString;
}