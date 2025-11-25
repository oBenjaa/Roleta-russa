import readline from "readline-sync"
import { RoletaRussa } from "src/game/game.ts"

console.log("Roleta Russa")
const jogo = new RoletaRussa()

while (true) {
  const acao = readline.question("Pressione ENTER para puxar o gatilho ou Q para sair: ")
  if (acao.toLowerCase() === "q") break
  if (jogo.atirar()) {
    console.log("Bang! Você perdeu.")
    break
  } else {
    console.log("Clique! Você sobreviveu.")
  }
}