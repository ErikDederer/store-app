export default function Book(props: {
  title: string;
  author: string;
  year: number;
}) {
  return (
    <div>
      <p>Название: {props.title}</p>
      <p>Автор: {props.author}</p>
      <p>Год: {props.year}</p>
    </div>
  );
}
