using HotChocolate;
namespace cloudymachines
{
    public class graphqltype
    {
    }
    public class Book
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }

    }
    public class Author
    {
        public string Name { get; set; }

    }
}
