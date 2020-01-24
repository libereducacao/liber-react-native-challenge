const veiculo = "AMAROK High.CD 2.0 16V TDI 4x4 Dies";

test("Verificar nome", () => {
  expect(veiculo).toMatch(/.+?(?=\s\d\.)/i)
})

test("Encontrar cilindradas", () => {
  expect(veiculo).toMatch(/(\d\.\d)/i) 
})

test("Encontrar voltagem", () => {
  expect(veiculo).toMatch(/[\d]+v/i)
})