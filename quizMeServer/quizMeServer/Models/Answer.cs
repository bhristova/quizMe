namespace quizMeServer.Models
{
    public class Answer
    {
        public string Id { get; set; }
        public string Value { get; set; }
        public bool Correct { get; set; }

        public Answer(string id, string value, bool correct)
        {
            Id = id;
            Value = value;
            Correct = correct;
        }
    }
}
