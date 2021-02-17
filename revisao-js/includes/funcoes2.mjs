// O export default só funciona para functions e classes
// Neste arquivo, há apenas um item sendo exportado, e é uma function
// Não funciona para constantes e variáveis
export default function dobraVet(vet) {
    // Cria um novo vetor com elementos com o dobro do valor do vetor original
    let res = []
    for(let n of vet) res.push(n * 2)
    return res
}
