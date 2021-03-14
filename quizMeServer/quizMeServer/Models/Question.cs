using System.Collections.Generic;

namespace quizMeServer.Models
{
    public enum Category
    {
        art,
        history,
        technology,
        animals,
        sports
    }

    public class Question
    {
        public string Id { get; set; }
        public string Value { get; set; }
        public List<Answer> Answers { get; set; }
        public Category Category { get; set; }
        public bool LastUsed { get; set; }
    }
}
