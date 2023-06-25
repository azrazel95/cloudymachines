using HotChocolate;
namespace cloudymachines
{
    public class Query
    {
        public Book GetBook() =>
            new Book
            {
                Title = "C# in depth.",
                Author = new Author
                {
                    Name = "jon skeet"
                }
            };
    }
}
