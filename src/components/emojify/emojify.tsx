type Props = {
  inputString: string;
}

export function Emojify({inputString}: Props) {
  const emojis: {[key: string]: string} = {
    'apple': '🍎',
    'banana': '🍌',
    'cherry': '🍒'
  }
  
  const newString = inputString.split(/\b/).map(part => {
    const lower = part.toLocaleLowerCase()
    return emojis[lower] || part
  })

  return (
    <div>
      {newString.join('')}
    </div>
  )
}