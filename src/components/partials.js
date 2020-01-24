export default Model = (model) => {
    const { Valor, Modelo } = model;

    const price = Valor.split(`R$${Valor.includes(" ") ? " " : ""}`)[1].split(","); // Separar o preço em duas strings (para visualização na lista principal)
    
    //Patterns
    const name = Modelo.match(/.+?(?=\s\d\.)/i) // Encontrar caracteres antes de cilindradas
    const cc = Modelo.match(/(\d\.\d)/i) // Encontrar valor das cilindradas
    const volt = Modelo.match(/[\d]+v/i) // Valor da voltagem
    const ch = Modelo.match(/.{4}$/) // Encotrar as ultimas 4 caracteres da string
    const chCheck = ch ? ch[0].toLowerCase() : ch  //Retornar boolean ou valor do câmbio em letras minúsculas (para evitar uma possível variação) para verificação e conveniência

    return {
        price,
        name: name ? name[0] : Modelo,
        cc: cc ? cc[0] : "Indisponível",
        volt: volt ? volt[0] : "Indisponível",
        ch: !ch ? ch : chCheck.includes("mec") ? "MANUAL" : chCheck.includes("aut") ? "AUTOMÁTICO" : null // Caso a string de câmbio inclua as letras "mec" ou "aut", retornar: "MANUAL" ou "AUTOMATICO"
    }
}