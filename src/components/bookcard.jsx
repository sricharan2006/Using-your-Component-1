
const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} />
      <h2>{book.name}</h2>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Author:</strong> {book.author}</p>
    </div>
  );
};

export default BookCard;
