
export const App = () => {

  const textFunction = () => {
    alert("Hello")
  }
  return (
    <>
      <h1 className="Heading-tag-styles">The quick brown fox jumps over the lazy dog.</h1>
      <a className="anchor-tag-styles" href="http://www.youtube.com">Test</a>
      <button className="button-styles" onClick={textFunction}> Click me</button>
    </>
  )
}