const fs = require('fs-extra');
const path = require('node:path');

// Caminho de origem passado como argumento (caminho de onde você quer copiar os arquivos)
const sourceDir = process.argv[2];

// Verifica se o caminho de origem foi passado
if (!sourceDir) {
  console.error('Erro: Você precisa especificar o caminho de origem dos testes.');
  process.exit(1);
}

// Caminho de destino é a raiz do diretório onde o script está localizado
const targetDir = path.join(__dirname, 'cypress');

// Função para copiar os arquivos
async function copyCypressTests() {
  try {
    // Verifica se a pasta de destino já existe, e se não, cria
    await fs.ensureDir(targetDir);

    // Copia a pasta inteira do diretório de origem para o destino
    await fs.copy(sourceDir, targetDir);

    console.log(`Testes Cypress copiados de ${sourceDir} para ${targetDir}`);
  } catch (err) {
    console.error('Erro ao copiar os testes Cypress:', err);
  }
}

// Executa a função
copyCypressTests();
