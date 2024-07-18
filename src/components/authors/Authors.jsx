import Author from "./Author";

const Authors = ({ currentAuthors }) => {
  return (
    <>
      {currentAuthors.map((author) => (
        <Author key={author.id} author={author} />
      ))}
    </>
  );
};
export default Authors;
