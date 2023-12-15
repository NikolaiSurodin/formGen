export const login = () => {
  const min = 1
  const max = 99 * 999
  const token = min + Math.random() * ( max + 1 - min )
  localStorage.setItem( 'token', token )
}
