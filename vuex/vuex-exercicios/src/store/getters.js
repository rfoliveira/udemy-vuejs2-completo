// Exemplo de organização de arquivo com todos os getters
export const getNome = state => state.nome
export const getNomeCompleto = state => `${state.nome} ${state.sobrenome}`