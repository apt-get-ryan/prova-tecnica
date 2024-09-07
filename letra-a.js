function contarLetraA(texto) {
    let count = (texto.toLowerCase().match(/a/g) || []).length;
    if (count > 0) {
        console.log(`A letra 'a' aparece ${count} vezes.`);
    } else {
        console.log("A letra 'a' não aparece nenhuma vez");
    }
}

let texto = "O Paraná é lindo demais";
contarLetraA(texto)