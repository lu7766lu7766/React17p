export default function Html(): JSX.Element {
  const html = `<h1 style="color: red">hello world!!</h1>`;
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
}
