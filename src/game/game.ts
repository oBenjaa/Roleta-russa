export class RoletaRussa {
  balas: number
  posicaoAtual: number

  constructor(balas: number = 1) {
    this.balas = balas
    this.posicaoAtual = Math.floor(Math.random() * 6)
  }

  atirar(): boolean {
    const disparo = this.posicaoAtual === 0
    this.posicaoAtual = (this.posicaoAtual + 1) % 6
    return disparo
  }
}
